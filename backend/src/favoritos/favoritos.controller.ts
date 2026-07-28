import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseGuards,
  Request,
  ParseIntPipe,
} from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('favoritos')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADOTANTE)
export class FavoritosController {
  constructor(private favoritosService: FavoritosService) {}

  @Post(':animalId')
  adicionar(
    @Request() req,
    @Param('animalId', ParseIntPipe) animalId: string,
  ) {
    return this.favoritosService.adicionar(req.user.id, animalId);
  }

  @Get()
  listar(@Request() req) {
    return this.favoritosService.listar(req.user.id);
  }

  @Delete(':animalId')
  remover(
    @Request() req,
    @Param('animalId', ParseIntPipe) animalId: string,
  ) {
    return this.favoritosService.remover(req.user.id, animalId);
  }
}