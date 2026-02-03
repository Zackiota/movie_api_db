import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query, ParseIntPipe, Req } from '@nestjs/common';
import { PhimService } from './phim.service';
import { Prisma } from '../generated/client/client';
import { CreatePhimDto } from './dto/create-phim.dto';
import { UpdatePhimDto } from './dto/update-phim.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { QueryDto } from 'src/common/dto/query.dto';
import { SkipPermission } from '../common/decorators/check-permission.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';

@ApiTags('Phim API')
@Controller('phim')
export class PhimController {
    constructor(private readonly phimService: PhimService) {}
// tao danh sach Phim: 
    @Post()
    create(@Body() createPhimDto: CreatePhimDto) {
        return this.phimService.create(createPhimDto);
        }
    @SkipPermission()
    @ResponseMessage("Tìm được Danh sách Phim")
    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.phimService.findAll(queryDto);
    }
    @Get(':maPhim')
    findOne(@Param('maPhim') maPhim: number) {
        return this.phimService.findOne(+maPhim);
    }
    @Put(':maPhim')
    update(
        @Param ('maPhim') maPhim: number, 
        @Body() updatePhimDto: UpdatePhimDto) {
            return this.phimService.update(maPhim, updatePhimDto);
        }
    
    @Patch(':maPhim')
    updatePartial(
        @Param ('maPhim', ParseIntPipe) maPhim: number, 
        @Body() updatePhimDto: UpdatePhimDto) {
            return this.phimService.update(maPhim, updatePhimDto);
            }

    @Delete(':maPhim')
    remove(@Param('maPhim') maPhim: number) {
        return this.phimService.remove(maPhim);
    }
}