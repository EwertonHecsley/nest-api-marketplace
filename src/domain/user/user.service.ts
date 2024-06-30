import { Injectable } from '@nestjs/common';
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
}
