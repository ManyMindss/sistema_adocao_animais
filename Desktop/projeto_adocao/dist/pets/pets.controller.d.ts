import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    findAll(): Promise<{
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
    create(createPetDto: CreatePetDto): Promise<{
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
    getDisponiveis(): string;
    findOne(id: string): string;
}
