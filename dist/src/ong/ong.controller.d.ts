import { OngService } from './ong.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
export declare class OngController {
    private ongService;
    constructor(ongService: OngService);
    create(createOngDto: CreateOngDto, req: any): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
    }>;
    findAll(): Promise<({
        animals: {
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
        }[];
        telefones: {
            id: number;
            idOng: number | null;
            numero: string;
            tipoTelefone: string;
            idAdotante: number | null;
        }[];
    } & {
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        animals: {
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
        }[];
        telefones: {
            id: number;
            idOng: number | null;
            numero: string;
            tipoTelefone: string;
            idAdotante: number | null;
        }[];
    } & {
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
    }>;
    update(id: number, updateOngDto: UpdateOngDto): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
    }>;
}
