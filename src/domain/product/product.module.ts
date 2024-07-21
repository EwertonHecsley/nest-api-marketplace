import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProdctRepository } from '../repository/product;repository';
import { PrismaService } from 'src/infra/prisma_orm/prisma.service';

@Module({
  providers: [ProductService, ProdctRepository, PrismaService],
  controllers: [ProductController]
})
export class ProductModule { }
