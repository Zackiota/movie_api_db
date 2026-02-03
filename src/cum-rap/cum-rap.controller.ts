import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { CumRapService } from './cum-rap.service';
import { Prisma } from '../generated/client/client';
import { ApiTags } from '@nestjs/swagger';
import { CreateCumRapDto } from './dto/create-cumRap.dto';
import { UpdateCumRapDto } from './dto/update-cumRap.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Cụm Rạp')
@Controller('cum-rap')
export class CumRapController {
    constructor(private readonly cumRapService: CumRapService) {}

    @Post()
    create(@Body() createCumRapDto: CreateCumRapDto) {
        return this.cumRapService.create(createCumRapDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.cumRapService.findAll(queryDto);
    }
    @Get(':maCumRap')
    findOne(@Param('maCumRap') maCumRap: number) {
        return this.cumRapService.findOne(maCumRap);
    }

    @Put(':maCumRap')
    update(@Param('maCumRap') maCumRap: number, @Body() CreateCumRapDto: CreateCumRapDto) {
        return this.cumRapService.update(maCumRap, CreateCumRapDto);
    }

    @Patch(':maCumRap')
    updatePartial(@Param('maCumRap') maCumRap: number, @Body() UpdateCumRapDto: UpdateCumRapDto) {
        return this.cumRapService.update(maCumRap, UpdateCumRapDto);
    }

    @Delete(':maCumRap')
    remove(@Param('maCumRap') maCumRap: number, @Body() updateCumRapDto: UpdateCumRapDto) {
        return this.cumRapService.remove(maCumRap, updateCumRapDto);
    }
}