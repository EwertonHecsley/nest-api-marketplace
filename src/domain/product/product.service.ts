import { Injectable } from '@nestjs/common';
import { ProdctRepository } from '../repository/product;repository';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProdctRepository) { }

    async findAll(): Promise<ProductDto[]> {
        return await this.productRepository.findAll();
    }
}
