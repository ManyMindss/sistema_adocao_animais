import { Injectable,NotFoundException,ConflictException }from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FavoritosService {
    constructor(private prisma :PrismaService) {}

    async adicionar (adotanteId: number,animalId:number){


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

    async listar (adotanteId :number){
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

    async remover (adotanteId :number,animalId: number){
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