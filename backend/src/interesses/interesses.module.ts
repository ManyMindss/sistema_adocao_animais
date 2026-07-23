import { Module } from '@nestjs/common';
import { InteressesService } from './interesses.service';
import { InteressesController } from './interesses.controller';

@Module({
  controllers: [InteressesController],
  providers: [InteressesService],
})
export class InteressesModule {}