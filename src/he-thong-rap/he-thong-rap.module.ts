import { Module } from '@nestjs/common';
import { HeThongRapService } from './he-thong-rap.service';
import { HeThongRapController } from './he-thong-rap.controller';

@Module({
  providers: [HeThongRapService],
  controllers: [HeThongRapController]
})
export class HeThongRapModule {}
