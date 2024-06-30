import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { PrismaService } from './infra/prisma_orm/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
