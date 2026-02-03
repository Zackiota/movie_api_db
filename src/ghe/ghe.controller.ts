import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { GheService } from './ghe.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateGheDto } from './dto/create-ghe.dto';
import { UpdateGheDto } from './dto/update-ghe.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Ghế')
@Controller('ghe')
export class GheController {
    constructor(private readonly gheService: GheService) {}

    @Post()
    create(@Body() CreateGheDto: CreateGheDto) {
        return this.gheService.create(CreateGheDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.gheService.findAll(queryDto);
    }

    @Get(':maGhe')
    findOne(@Param('maGhe') maGhe: number) {
        return this.gheService.findOne(maGhe);
    }

    @Put(':maGhe')
    update(@Param('maGhe') maGhe: number, @Body() updateGheDto: UpdateGheDto) {
        return this.gheService.update(maGhe, updateGheDto);
    }

    @Patch(':maGhe')
    updatePartial(@Param('maGhe') maGhe: number, @Body() updateGheDto: UpdateGheDto) {
        return this.gheService.update(maGhe, updateGheDto);
    }

    @Delete(':maGhe')
    remove(@Param('maGhe') maGhe: number) {
        return this.gheService.remove(maGhe);
    }
}