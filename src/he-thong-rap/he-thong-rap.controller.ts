import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { HeThongRapService } from './he-thong-rap.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateHeThongRapDto } from './dto/create-heThongRap.dto';
import { UpdateHeThongRapDto } from './dto/update-heThongRap.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Hệ Thống Rạp')
@Controller('he-thong-rap')
export class HeThongRapController {
    constructor(private readonly heThongRapService: HeThongRapService) {}

    @Post()
    create(@Body() createHeThongRapDto: CreateHeThongRapDto) {
        return this.heThongRapService.create(createHeThongRapDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.heThongRapService.findAll(queryDto);
    }

    @Get(':maHeThongRap')
    findOne(@Param('maHeThongRap') maHeThongRap: number) {
        return this.heThongRapService.findOne(maHeThongRap);
    }

    @Put(':maHeThongRap')
    update(@Param('maHeThongRap') maHeThongRap: number, @Body() updateHeThongRapDto: UpdateHeThongRapDto) {
        return this.heThongRapService.update(maHeThongRap, updateHeThongRapDto);
    }

    @Delete(':maHeThongRap')
    remove(@Param('maHeThongRap') maHeThongRap: number) {
        return this.heThongRapService.remove(maHeThongRap);
    }
}