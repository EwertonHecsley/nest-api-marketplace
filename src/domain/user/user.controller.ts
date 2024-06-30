import { Body, Controller, Get, HttpStatus, Param, Post, Query, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserDto } from './dto/user.dto';

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

    @Post()
    async store(@Body() dataUser: UserDto, @Res() response: Response) {
        const { password: _, ...user } = await this.userService.create(dataUser);

        return response.status(HttpStatus.CREATED).json(user);
    }

}
