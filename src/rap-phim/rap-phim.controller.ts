import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { RapPhimService } from './rap-phim.service';
import { ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Rạp Phim')
@Controller('rap-phim')
export class RapPhimController {
    constructor(private readonly rapPhimService: RapPhimService) {}

    @Post()
    create(@Body() createRapPhimDto: any) {
        return this.rapPhimService.create(createRapPhimDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.rapPhimService.findAll(queryDto);
    }

    @Get(':maRap')
    findOne(@Param('maRap') maRap: number) {
        return this.rapPhimService.findOne(maRap);
    }

    @Put(':maRap')
    update(@Param('maRap') maRap: number, @Body() updateRapPhimDto: any) {
        return this.rapPhimService.update(maRap, updateRapPhimDto);
    }

    @Patch(':maRap')
    updatePartial(@Param('maRap') maRap: number, @Body() updateRapPhimDto: any) {
        return this.rapPhimService.update(maRap, updateRapPhimDto);
    }

    @Delete(':maRap')
    remove(@Param('maRap') maRap: number) {
        return this.rapPhimService.remove(maRap);
    }
}