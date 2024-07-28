import { Controller, Get, HttpStatus, Param, Req, Res, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guard/jwt.guard';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async handler(@Res() response: Response) {
        const products = await this.productService.findAll();

        return response.status(HttpStatus.OK).json(products);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async index(@Param('id') id: string, @Res() response: Response) {
        const product = await this.productService.findById(parseInt(id));

        return response.status(HttpStatus.OK).json(product);
    }
}
