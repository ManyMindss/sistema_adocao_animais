import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AnimaisModule } from './animais/animais.module';
import { OngModule } from './ong/ong.module';
import { AdotanteController } from './adotante/adotante.controller';
import { AdotanteModule } from './adotante/adotante.module';


@Module({
  imports :[AuthModule,PrismaModule,AnimaisModule,OngModule,AdotanteModule],
})
export class AppModule{}