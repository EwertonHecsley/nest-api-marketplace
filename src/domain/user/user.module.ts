import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from '../repository/user.repository';
import { PrismaService } from 'src/infra/prisma_orm/prisma.service';

@Module({
  providers: [UserService, UserRepository, PrismaService],
  controllers: [UserController]
})
export class UserModule { }
