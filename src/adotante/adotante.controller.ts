import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { AdotanteService } from './adotante.service';
import { CreateAdotanteDto } from './dto/create-adotante.dto';
import { UpdateAdotanteDto } from './dto/update-adotante.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('adotante')
export class AdotanteController {
  constructor(private adotanteService: AdotanteService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  create(@Body() createAdotanteDto: CreateAdotanteDto, @Request() req) {
    return this.adotanteService.create(createAdotanteDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.adotanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adotanteService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdotanteDto: UpdateAdotanteDto,
  ) {
    return this.adotanteService.update(id, updateAdotanteDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adotanteService.remove(id);
  }
}