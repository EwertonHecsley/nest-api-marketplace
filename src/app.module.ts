import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { PrismaService } from './infra/prisma_orm/prisma.service';
import { HashService } from './infra/hash/hash.service';
import { AuthModule } from './domain/auth/auth.module';
import { ProductModule } from './domain/product/product.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule],
  controllers: [],
  providers: [PrismaService, HashService]
})
export class AppModule { }
