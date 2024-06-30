import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async handler(@Res() response: Response) {
        const users = await this.userService.findAll();

        return response.status(HttpStatus.OK).json(users);
    }

    @Get(':id')
    async index(@Param('id') id: string, @Res() response: Response) {
        const { password: _, ...user } = await this.userService.findById(parseInt(id));

        return response.status(HttpStatus.OK).json(user);
    }
}
