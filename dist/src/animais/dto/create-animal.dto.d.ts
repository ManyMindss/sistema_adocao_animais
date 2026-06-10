import { SexoAnimal, StatusAnimal } from "@prisma/client";
export declare class CreateAnimalDto {
    idOng: number;
    nome: string;
    raca?: string;
    sexo?: SexoAnimal;
    cor?: string;
    idade?: number;
    temperamento?: string;
    porte?: string;
    pelagem?: string;
    status?: StatusAnimal;
}
