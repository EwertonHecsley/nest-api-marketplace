import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async handler(@Res() response: Response) {
        const users = (await this.userService.findAll()).map((element) => {
            const { password: _, ...result } = element;
            return result;
        });

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

    @Delete(':id')
    async destroy(@Param('id') id: string, @Res() response: Response) {
        await this.userService.delete(parseInt(id));

        return response.status(HttpStatus.NO_CONTENT).send();
    }

}
