import { Module } from '@nestjs/common';
import { RapPhimService } from './rap-phim.service';
import { RapPhimController } from './rap-phim.controller';

@Module({
  providers: [RapPhimService],
  controllers: [RapPhimController]
})
export class RapPhimModule {}
