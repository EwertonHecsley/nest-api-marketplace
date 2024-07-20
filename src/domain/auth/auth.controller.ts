import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(

        @Body() dataLogin: LoginDto,
        @Req() request: Request,
        @Res() response: Response) {

        const { email, password } = dataLogin

        const result = await this.authService.validateUser(email, password);
        const token = await this.authService.token(result);

        const { password: _, ...user } = result;

        request.user = user;

        return response.status(HttpStatus.ACCEPTED).json({ mensagem: 'Usuário logado com sucesso.', user, token });
    }
}
