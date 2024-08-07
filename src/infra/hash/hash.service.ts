import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
