import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProdctRepository } from '../repository/product.repository';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProdctRepository) { }

    async findAll(): Promise<ProductDto[]> {
        return await this.productRepository.findAll();
    }

    async findById(id: number): Promise<ProductDto> {
        const product = await this.productRepository.findById(id);
        if (!product) throw new HttpException("Producto não encontrado.", HttpStatus.NOT_FOUND);

        return product;
    }
}
