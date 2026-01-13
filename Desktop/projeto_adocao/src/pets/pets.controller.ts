import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
@Controller('pets')
export class PetsController {
    constructor(private petsService: PetsService){}
    
    @Get()
     async findAll() {
    return this.petsService.test();
    }

    @Post()
    create(@Body ()createPetDto :CreatePetDto){
        return this.petsService.create(createPetDto)}

    @Get('Disponiveis')
    getDisponiveis():string{
       return "Pets disponiveis para adoção";
    }
    
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'Detalhes do pet ${id}';
    }
}
