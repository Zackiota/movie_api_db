import { Module } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { NguoiDungController } from './nguoi-dung.controller';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from 'src/module-system/token/token.module';

@Module({
  imports: [AuthModule, TokenModule],
  providers: [NguoiDungService],
  controllers: [NguoiDungController]
})
export class NguoiDungModule {}
