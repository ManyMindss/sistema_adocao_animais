import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';

@Injectable()
export class OngService {
  constructor(private prisma: PrismaService) {}

  async create(createOngDto: CreateOngDto, usuarioId: string) {
    return this.prisma.ong.create({
      data: {
        ...createOngDto,
        usuarioId,
      },
    });
  }

  async findAll() {
    return this.prisma.ong.findMany({
      include: { animals: true, telefones: true },
    });
  }

  async findOne(id: string) {
    const ong = await this.prisma.ong.findUnique({
      where: { id },
      include: { animals: true, telefones: true },
    });

    if (!ong) {
      throw new NotFoundException('ONG não encontrada');
    }

    return ong;
  }

  async update(id: string, updateOngDto: UpdateOngDto) {
    await this.findOne(id);

    return this.prisma.ong.update({
      where: { id },
      data: updateOngDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.ong.delete({
      where: { id },
    });
  }
}