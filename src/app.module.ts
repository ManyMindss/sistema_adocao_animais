import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [PetsModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
