import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { PrismaService } from './infra/prisma_orm/prisma.service';
import { HashService } from './infra/hash/hash.service';
import { AuthModule } from './domain/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [PrismaService, HashService],
})
export class AppModule { }
