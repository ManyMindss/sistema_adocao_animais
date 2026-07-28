import { Injectable,NotFoundException,ConflictException }from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FavoritosService {
    constructor(private prisma :PrismaService) {}

    async adicionar (adotanteId: string,animalId:string){


        const animal =await this.prisma.animal.findUnique ({
            where :{id : animalId},
        });

        if (!animal){
            throw new NotFoundException('Animal não encontrado');
        }
        
         const existente = await this.prisma.favorito.findUnique({
            where : {
                adotanteId_animalId: {adotanteId,animalId},
            },
        });

        if (existente){
            throw new ConflictException('Animal já está nos favoritos');
        }
        return this.prisma.favorito.create({
            data : {adotanteId,animalId},
        });
    }

    async listar (adotanteId :string){
        return this.prisma.favorito.findMany({
            where :{adotanteId},
            include : {
                animal:{
                    include:{ong:true},
                },
            },
            orderBy :{createdAt:'desc'},
        });
    }

    async remover (adotanteId :string,animalId: string){
        const favorito = await this.prisma.favorito.findUnique({
            where :{
                adotanteId_animalId :{adotanteId,animalId},
            },
        });
    
        if (!favorito){
            throw new NotFoundException('Favorito não encontrado');
        }
        return this.prisma.favorito.delete({
            where : {
                adotanteId_animalId : {adotanteId,animalId},
            },
        });
    }

}