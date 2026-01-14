import { Module } from '@nestjs/common';
import { DatVeService } from './dat-ve.service';
import { DatVeController } from './dat-ve.controller';

@Module({
  providers: [DatVeService],
  controllers: [DatVeController]
})
export class DatVeModule {}
