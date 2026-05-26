import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { StatusPetDto } from './dto/status-adocao-pet.dto';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    findAll(): Promise<{
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
    create(createPetDto: CreatePetDto): Promise<{
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
    getDisponiveis(): Promise<{
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
    updateStatus(id: String, statusPetDto: StatusPetDto): Promise<{
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
    teste(id: string): {
        id: string;
        ok: boolean;
    };
}
