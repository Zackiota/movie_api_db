import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@ApiTags('Banner')
@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) {}

    @Post()
    create(@Body() createBannerDto: CreateBannerDto) {
        return this.bannerService.create(createBannerDto);
    }

    @Get()
    findAll(@Query() queryDto: QueryDto) {
        return this.bannerService.findAll(queryDto);
    }

    @Get(':maBanner')
    findOne(@Param('maBanner') maBanner: number) {
        return this.bannerService.findOne(maBanner);
    }

    @Put(':maBanner')
    update(@Param('maBanner') maBanner: number, @Body() updateBannerDto: UpdateBannerDto) {
        return this.bannerService.update(maBanner, updateBannerDto);
    }
    
    @Patch(':maBanner')
    updatePartial(@Param('maBanner') maBanner: number, @Body() updateBannerDto: UpdateBannerDto) {
        return this.bannerService.update(maBanner, updateBannerDto);
    }

    @Delete(':maBanner')
    remove(@Param('maBanner') maBanner: number) {
        return this.bannerService.remove(maBanner);
    }
}