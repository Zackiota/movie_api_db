import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query, ParseIntPipe } from '@nestjs/common';
import { PhimService } from './phim.service';
import { Prisma } from '@prisma/client';
//import { CreatePhimDto } from './dto/create-phim.dto';
//import { UpdatePhimDto } from './dto/update-phim.dto';

@Controller('phim')
export class PhimController {
    constructor(private readonly phimService: PhimService) {}
// tao danh sach Phim: 
    @Post()
    create(@Body() createPhimDto: CreatePhimDto) {
        return this.phimService.create(createPhimDto);
        }
    @Get()
    findAll() {
        return this.phimService.findAll();
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