import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
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
}