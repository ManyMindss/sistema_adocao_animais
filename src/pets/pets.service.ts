import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { StatusAnimal } from '@prisma/client';
import { StatusPetDto } from './dto/status-adocao-pet.dto';
@Injectable()
export class PetsService {
constructor(private prisma: PrismaService) {}

async test()
    { return await this.prisma.animal.findMany();
}
async create(dadosDopet:CreatePetDto){
    return await this.prisma.animal.create({
        data:dadosDopet,
    });
}
async findDisponivel(){
    return await this.prisma.animal.findMany({where: { status :StatusAnimal.DISPONIVEL}
    }); 
}
async updateStatus(id :number,statusPetDto :StatusPetDto){
    return await this.prisma.animal.update( {where : {id}, data: {status :statusPetDto.status}}); 
}}
