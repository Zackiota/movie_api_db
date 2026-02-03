import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query, Req } from '@nestjs/common';
import { LichChieuService } from './lich-chieu.service';
import { UpdateLichChieuDto } from './dto/update-lich-chieu.dto';
import { CreateLichChieuDto} from './dto/create-lich-chieu.dto';
import { Prisma } from '../generated/client/client';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { SkipPermission } from 'src/common/decorators/check-permission.decorator';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Lịch Chiếu')
@Controller('lich-chieu')
export class LichChieuController {
    constructor(private readonly lichChieuService: LichChieuService) {}

    @Post()
    create(@Body() createLichChieuDto: CreateLichChieuDto) {
        return this.lichChieuService.create(createLichChieuDto);
    }

    @SkipPermission()
    @ResponseMessage("Tìm được Danh sách lịch chiếu thành công")
    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.lichChieuService.findAll(queryDto);
    }

    @Get(':maLichChieu')
    findOne(@Param('maLichChieu') maLichChieu: number) {
        return this.lichChieuService.findOne(+maLichChieu);
    }

    @Put(':maLichChieu')
    update(@Param('maLichChieu') maLichChieu: number, 
        @Body() updateLichChieuDto: UpdateLichChieuDto) {
        return this.lichChieuService.update(+maLichChieu, updateLichChieuDto);
    }

    @Delete(':maLichChieu')
    remove(@Param('maLichChieu') maLichChieu: number) {
        return this.lichChieuService.remove(+maLichChieu);
    }
}