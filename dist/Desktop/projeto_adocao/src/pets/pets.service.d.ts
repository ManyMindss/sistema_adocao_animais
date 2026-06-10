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
        sexo: import(".prisma/client").$Enums.SexoAnimal | null;
        cor: string | null;
        idade: number | null;
        temperamento: string | null;
        pelagem: string | null;
        porte: string | null;
        status: import(".prisma/client").$Enums.StatusAnimal;
    }[]>;
    create(dadosDopet: CreatePetDto): Promise<{
        id: number;
        idOng: number;
        nome: string;
        raca: string | null;
        sexo: import(".prisma/client").$Enums.SexoAnimal | null;
        cor: string | null;
        idade: number | null;
        temperamento: string | null;
        pelagem: string | null;
        porte: string | null;
        status: import(".prisma/client").$Enums.StatusAnimal;
    }>;
}
