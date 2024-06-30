import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UserDto {

    @IsNotEmpty({ message: 'Campo nome é obrigatório.' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Campo email é obrigatório.' })
    @IsString()
    @IsEmail({}, { message: 'Formato de email inválido.' })
    email: string;

    @IsNotEmpty({ message: 'Campo password é obrigatório.' })
    @IsString()
    @MinLength(4, { message: 'Mimino 4 caracteres.' })
    password: string;

    @IsOptional()
    id?: number;
}