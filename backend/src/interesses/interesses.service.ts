 import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InteressesService {
  constructor(private prisma: PrismaService) {}

  async demonstrarInteresse(adotanteId: string, animalId: string, mensagem?: string) {
    // Verificar se o animal existe e está disponível
    const animal = await this.prisma.animal.findUnique({
      where: { id: animalId },
    });

    if (!animal) {
      throw new NotFoundException('Animal não encontrado');
    }

    if (animal.status !== 'DISPONIVEL') {
      throw new ConflictException('Animal não está disponível para adoção');
    }

    // Verificar se já demonstrou interesse
    const existente = await this.prisma.interesse.findUnique({
      where: {
        adotanteId_animalId: { adotanteId, animalId },
      },
    });

    if (existente) {
      throw new ConflictException('Você já demonstrou interesse neste animal');
    }

    return this.prisma.interesse.create({
      data: { adotanteId, animalId, mensagem },
      include: {
        animal: {
          include: { ong: true },
        },
      },
    });
  }

  async listarMeusInteresses(adotanteId: string) {
    return this.prisma.interesse.findMany({
      where: { adotanteId },
      include: {
        animal: {
          include: { ong: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

 async listarInteressesPorOng(usuarioId: string) {
  // Buscar a ONG pelo usuarioId
  const ong = await this.prisma.ong.findUnique({
    where: { usuarioId },
  });

  if (!ong) {
    throw new NotFoundException('ONG não encontrada');
  }

  return this.prisma.interesse.findMany({
    where: {
      animal: { idOng: ong.id },
    },
    include: {
      adotante: true,
      animal: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

  async removerInteresse(adotanteId: string, animalId: string) {  
    const interesse = await this.prisma.interesse.findUnique({
      where: {
        adotanteId_animalId: { adotanteId, animalId },
      },
    });

    if (!interesse) {
      throw new NotFoundException('Interesse não encontrado');
    }

    return this.prisma.interesse.delete({
      where: {
        adotanteId_animalId: { adotanteId, animalId },
      },
    });
  }
}