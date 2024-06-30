import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma_orm/prisma.service";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async findAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany();
    }
}