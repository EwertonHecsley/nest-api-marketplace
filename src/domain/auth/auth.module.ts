import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { HashService } from 'src/infra/hash/hash.service';
import { UserRepository } from '../repository/user.repository';
import { PrismaService } from 'src/infra/prisma_orm/prisma.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '10m' }
    })
  ],
  providers: [AuthService, UserService, HashService, UserRepository, PrismaService, LocalStrategy, JwtService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
