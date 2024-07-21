import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guard/jwt.guard';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async handler(@Req() request: Request, @Res() response: Response) {
        const user = request.user;
        console.log(user);
        const products = await this.productService.findAll();
        return response.json(products);
    }
}
