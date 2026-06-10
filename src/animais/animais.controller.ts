import {
  Controller,Get,Post,Body,Patch,Param,Delete,UseGuards,ParseIntPipe,}
   from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.animaisService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ) {
    return this.animaisService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.animaisService.remove(id);
  }
}