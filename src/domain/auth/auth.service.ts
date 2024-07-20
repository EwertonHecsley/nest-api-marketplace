import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { HashService } from 'src/infra/hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<UserDto> {
        const user = await this.userService.findByEmail(email);
        if (!user) throw new UnauthorizedException('Email não encontrado.');

        const verifyPassword = await this.hashService.compareHash(password, user.password);
        if (!verifyPassword) throw new UnauthorizedException('Senha inválida.');

        return user;
    }

    async token(user: any) {
        const payload = { email: user.email, id: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_KEY }),
        };
    }
}
