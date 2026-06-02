import { Role } from '@prisma/client';
export declare class CreateUserDto {
    nome: string;
    email: string;
    senha: string;
    role: Role;
}
