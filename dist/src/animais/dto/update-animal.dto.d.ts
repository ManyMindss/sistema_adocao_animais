import { SexoAnimal, StatusAnimal } from '@prisma/client';
export declare class UpdateAnimalDto {
    nome?: string;
    raca?: string;
    sexo?: SexoAnimal;
    coer?: string;
    idade?: number;
    temperamento?: string;
    porte?: string;
    status?: StatusAnimal;
}
export declare class StatusPetDto {
    status?: "DISPONIVEL" | "ADOTADO" | "EM_TRATAMENTO" | "AGUARDANDO_VISITA";
}
