import { Module } from '@nestjs/common';
import { OngService } from './ong.service';
import { OngController } from './ong.controller';

@Module({
  controllers: [OngController],
  providers: [OngService],
})
export class OngModule {}