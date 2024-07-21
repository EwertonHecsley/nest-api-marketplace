import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductDto {

    @IsNotEmpty({ message: 'Nome é obrigatório.' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Descrição do produto é obrigatória.' })
    @IsString()
    description: string;

    @IsNotEmpty({ message: 'Quantidade de estoque é obrigatório.' })
    @IsNumber()
    stock: number;

    @IsNotEmpty({ message: 'Categoria é obrigatório.' })
    @IsString()
    category: string;

    @IsNotEmpty({ message: 'Preço é obrigatório.' })
    @IsNumber()
    price: number;

    @IsNotEmpty({ message: 'Número de ordem orbrigatorio.' })
    @IsString()
    orders: string;

    @IsNotEmpty({ message: 'Id do usuário orbrigatorio' })
    @IsNumber()
    userId: number;

    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsNumber()
    id?: number;

}