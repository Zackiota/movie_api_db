import { Module } from '@nestjs/common';
import { LichChieuService } from './lich-chieu.service';
import { LichChieuController } from './lich-chieu.controller';

@Module({
  providers: [LichChieuService],
  controllers: [LichChieuController]
})
export class LichChieuModule {}
