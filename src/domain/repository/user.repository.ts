import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma_orm/prisma.service";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async findAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany();
    }

    async findbyId(id: number): Promise<UserDto> | undefined {
        return await this.prismaService.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<UserDto> | undefined {
        return await this.prismaService.user.findUnique({ where: { email } });
    }

    async create(data: UserDto): Promise<UserDto> {
        return await this.prismaService.user.create({ data });
    }

    async delete(id: number) {
        return await this.prismaService.user.delete({ where: { id } });
    }
}