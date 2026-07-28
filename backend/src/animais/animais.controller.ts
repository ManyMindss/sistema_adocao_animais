import {
  Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Query,
} from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animaisService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animaisService.findAll();
  }

  @Get('disponiveis')
  findAllDisponiveis(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('porte')porte?: string,
    @Query('idade')idade?:  string,
    @Query('localizacao')localizacao?:string , 
  ) {
    return this.animaisService.findAllDisponiveis(
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
      porte , 
      idade? parseInt(idade): undefined,
      localizacao, 
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.animaisService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return this.animaisService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.animaisService.remove(id);
  }
}7