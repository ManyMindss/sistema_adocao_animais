import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { StatusPetDto } from './dto/status-adocao-pet.dto';
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
    getDisponiveis(){
       return this.petsService.findDisponivel();
    }

    @Patch(':id/status')
    updateStatus
    (@Param ('id') id : String,
     @Body ()statusPetDto : StatusPetDto)
     {return this.petsService.updateStatus(Number(id),statusPetDto)}
    
    @Get(':id/status')
teste(@Param('id') id: string) {
  return { id, ok: true };
}

}
