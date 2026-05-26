import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
export declare class PetsService {
    private prisma;
    constructor(prisma: PrismaService);
    test(): Promise<{
        id: number;
        idOng: number;
        nome: string;
        raca: string | null;
        cor: string | null;
        idade: number | null;
        temperamento: string | null;
        pelagem: string | null;
        porte: string | null;
    }[]>;
    create(dadosDopet: CreatePetDto): Promise<{
        id: number;
        idOng: number;
        nome: string;
        raca: string | null;
        cor: string | null;
        idade: number | null;
        temperamento: string | null;
        pelagem: string | null;
        porte: string | null;
    }>;
}
