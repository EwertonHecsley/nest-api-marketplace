import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma_orm/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async findAll() {
        return await this.prismaService.user.findMany();
    }
}