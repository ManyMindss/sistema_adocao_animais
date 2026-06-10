import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
export declare class AnimaisController {
    private readonly animaisService;
    constructor(animaisService: AnimaisService);
    create(createAnimalDto: CreateAnimalDto): Promise<{
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
    findAll(): Promise<({
        ong: {
            id: number;
            nome: string;
            email: string | null;
            localizacao: string;
            usuarioId: number | null;
        };
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        ong: {
            id: number;
            nome: string;
            email: string | null;
            localizacao: string;
            usuarioId: number | null;
        };
    } & {
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
    update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<{
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
    remove(id: number): Promise<{
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
