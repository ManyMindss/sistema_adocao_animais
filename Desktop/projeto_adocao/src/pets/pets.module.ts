import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports:[PrismaModule],
  providers: [PetsService],
  controllers: [PetsController]
})
export class PetsModule {}
