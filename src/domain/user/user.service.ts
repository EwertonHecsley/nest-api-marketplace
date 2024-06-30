import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async findAll(): Promise<UserDto[]> {
        return await this.userRepository.findAll();
    }

    async findById(id: number): Promise<UserDto> {
        const user = await this.userRepository.findbyId(id);
        if (!user) throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);

        return user;
    }
}
