import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AnimaisModule } from '../animais/animais.module';
import { OngModule } from '../ong/ong.module';
import { AdotanteModule } from '../adotante/adotante.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoritosModule } from '../favoritos/favoritos.module';
import { InteressesModule } from '../interesses/interesses.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    AnimaisModule,
    OngModule,
    AdotanteModule,
    FavoritosModule,
    InteressesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
