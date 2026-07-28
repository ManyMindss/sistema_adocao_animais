import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  ParseIntPipe,
} from '@nestjs/common';
import { InteressesService } from './interesses.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('interesses')
export class InteressesController {
  constructor(private interessesService: InteressesService) {}

  // ADOTANTE: Demonstrar interesse
  @Post(':animalId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  demonstrarInteresse(
    @Request() req,
    @Param('animalId', ParseIntPipe) animalId: string,
    @Body('mensagem') mensagem?: string,
  ) {
    return this.interessesService.demonstrarInteresse(req.user.id, animalId, mensagem);
  }

  // ADOTANTE: Listar meus interesses
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  listarMeusInteresses(@Request() req) {
    return this.interessesService.listarMeusInteresses(req.user.id);
  }

  // INSTITUICAO: Listar interesses nos meus animais
  @Get('ong')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.INSTITUICAO)
  listarInteressesPorOng(@Request() req) {
    return this.interessesService.listarInteressesPorOng(req.user.id);
  }

  // ADOTANTE: Remover interesse
  @Delete(':animalId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADOTANTE)
  removerInteresse(
    @Request() req,
    @Param('animalId', ParseIntPipe) animalId: string,
  ) {
    return this.interessesService.removerInteresse(req.user.id, animalId);
  }
}