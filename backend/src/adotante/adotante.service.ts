import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdotanteDto } from './dto/create-adotante.dto';
import { UpdateAdotanteDto } from './dto/update-adotante.dto';
@Injectable()
export class AdotanteService {
  constructor(private prisma: PrismaService) {}

  async create(createAdotanteDto: CreateAdotanteDto, usuarioId: number) {
    return this.prisma.adotante.create({
      data: {
        ...createAdotanteDto,
        dataNascimento: new Date(createAdotanteDto.dataNascimento),
        usuarioId,
      },
    });
  }

  async findAll() {
    return this.prisma.adotante.findMany({
      include: { telefones: true },
    });
  }

  async findOne(id: number) {
    const adotante = await this.prisma.adotante.findUnique({
      where: { id },
      include: { telefones: true },
    });

    if (!adotante) {
      throw new NotFoundException('Adotante não encontrado');
    }

    return adotante;
  }

  async update(id: number, updateAdotanteDto: UpdateAdotanteDto) {
    await this.findOne(id);

    const data: any = { ...updateAdotanteDto };
    if (updateAdotanteDto.dataNascimento) {
      data.dataNascimento = new Date(updateAdotanteDto.dataNascimento);
    }

    return this.prisma.adotante.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.adotante.delete({
      where: { id },
    });
  }
}