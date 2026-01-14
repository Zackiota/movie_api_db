import { Module } from '@nestjs/common';
import { PhimService } from './phim.service';
import { PhimController } from './phim.controller';

@Module({
  providers: [PhimService],
  controllers: [PhimController]
})
export class PhimModule {}
