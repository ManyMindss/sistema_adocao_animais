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
import { OngService } from './ong.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('ong')
export class OngController {
  constructor(private ongService: OngService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  create(@Body() createOngDto: CreateOngDto, @Request() req) {
    return this.ongService.create(createOngDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.ongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ongService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOngDto: UpdateOngDto,
  ) {
    return this.ongService.update(id, updateOngDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ongService.remove(id);
  }
}