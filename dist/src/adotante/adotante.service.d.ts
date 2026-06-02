import { PrismaService } from '../prisma/prisma.service';
import { CreateAdotanteDto } from './dto/create-adotante.dto';
import { UpdateAdotanteDto } from './dto/update-adotante.dto';
export declare class AdotanteService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAdotanteDto: CreateAdotanteDto, usuarioId: number): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
        dataNascimento: Date;
    }>;
    findAll(): Promise<({
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
        dataNascimento: Date;
    })[]>;
    findOne(id: number): Promise<{
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
        dataNascimento: Date;
    }>;
    update(id: number, updateAdotanteDto: UpdateAdotanteDto): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
        dataNascimento: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        email: string | null;
        localizacao: string;
        usuarioId: number | null;
        dataNascimento: Date;
    }>;
}
