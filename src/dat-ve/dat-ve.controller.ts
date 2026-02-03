import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { DatVeService } from './dat-ve.service';    
import { Prisma } from '../generated/client/client';
import { UpdateDatVeDto } from './dto/update-datVe.dto';
import { CreateDatVeDto } from './dto/create-datVe.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/common/dto/query.dto';


@ApiTags('Đặt Vé')
@Controller('dat-ve')
export class DatVeController {
    constructor(private readonly datVeService: DatVeService) {}

    @Post()
    create(@Body() createDatVeDto: CreateDatVeDto) {
        return this.datVeService.create(createDatVeDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.datVeService.findAll(queryDto);
    }

    @Get(':maDatVe')
    findOne(@Param('maDatVe') maDatVe: number) {
        return this.datVeService.findOne(maDatVe);
    }

    @Put(':maDatVe')
    update(@Param('maDatVe') maDatVe: number, @Body() updateDatVeDto: any) {
        return this.datVeService.update(maDatVe, updateDatVeDto);
    }

    @Delete(':maDatVe')
    remove(@Param('maDatVe') maDatVe: number) {
        return this.datVeService.remove(maDatVe);
    }
}