import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PhimModule } from './phim/phim.module';
import { NguoiDungModule } from './nguoi-dung/nguoi-dung.module';
import { LichChieuModule } from './lich-chieu/lich-chieu.module';
import { RapPhimModule } from './rap-phim/rap-phim.module';
import { DatVeModule } from './dat-ve/dat-ve.module';
import { GheModule } from './ghe/ghe.module';
import { CumRapModule } from './cum-rap/cum-rap.module';
import { HeThongRapModule } from './he-thong-rap/he-thong-rap.module';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, PhimModule, NguoiDungModule, LichChieuModule, RapPhimModule, DatVeModule, GheModule, CumRapModule, HeThongRapModule, BannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
