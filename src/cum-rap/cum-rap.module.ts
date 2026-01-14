import { Module } from '@nestjs/common';
import { CumRapService } from './cum-rap.service';
import { CumRapController } from './cum-rap.controller';

@Module({
  providers: [CumRapService],
  controllers: [CumRapController]
})
export class CumRapModule {}
