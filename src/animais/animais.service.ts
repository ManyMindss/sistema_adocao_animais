import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimaisService {
  constructor(private prisma: PrismaService) {}

  async create(createAnimalDto: CreateAnimalDto) {
    return this.prisma.animal.create({
      data: createAnimalDto,
    });
  }

  async findAll() {
    return this.prisma.animal.findMany({
      include: { ong: true },
    });
  }

  async findOne(id: number) {
    const animal = await this.prisma.animal.findUnique({
      where: { id },
      include: { ong: true },
    });

    if (!animal) {
      throw new NotFoundException('Animal não encontrado');
    }

    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    await this.findOne(id);

    return this.prisma.animal.update({
      where: { id },
      data: updateAnimalDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.animal.delete({
      where: { id },
    });
  }
}