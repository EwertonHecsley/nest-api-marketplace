import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma_orm/prisma.service";
import { ProductDto } from "../product/dto/product.dto";

@Injectable()
export class ProdctRepository {
    constructor(private readonly prismaService: PrismaService) { }


    async findAll(): Promise<ProductDto[]> {
        return await this.prismaService.product.findMany();
    }
}