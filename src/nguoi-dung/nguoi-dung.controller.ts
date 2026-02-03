import { Body, Controller, Post, Get, Request, UseGuards, Query, Put, Param } from '@nestjs/common';
//import { HttpCode, HttpStatus } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { NguoiDungService } from './nguoi-dung.service';
import { Public } from '../common/decorator/public.decorator'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { GetInfoDto } from './dto/get-info.dto';
import { QueryDto } from 'src/common/dto/query.dto';
import {UpdateNguoiDungDto} from './dto/update-nguoi-dung.dto';


@ApiTags('Người Dùng')
@Controller('nguoi-dung')
export class NguoiDungController {
    constructor(private nguoiDungService: NguoiDungService) {}

    @Public()
    @Post('register')
    register(@Body() body: RegisterDto) {
        const result = this.nguoiDungService.register(body);
        return result;
    }

    @Public()
    @Post('login')
    //@HttpCode(HttpStatus.OK)
    login(@Body() loginDto: LoginDto) {
        return this.nguoiDungService.login(loginDto);
    }

    @Public()
    @Get('get-info')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    getInfo(@Request() GetInfoDto: GetInfoDto) {
        return this.nguoiDungService.getInfo(GetInfoDto);
    }

    @Get()
    findMany(@Query() queryDto: QueryDto) {
        return this.nguoiDungService.findMany();
    }

    @Get(':maTaiKhoan')
    findOne(@Param('maTaiKhoan') maTaiKhoan: number) {
        return this.nguoiDungService.findOne(+maTaiKhoan);
    }

    @Put(':maTaiKhoan')
    update(@Param('maTaiKhoan') maTaiKhoan: number, 
        @Body() updateNguoiDungDto: UpdateNguoiDungDto) {
        return this.nguoiDungService.update(maTaiKhoan, updateNguoiDungDto);
    }   

}
