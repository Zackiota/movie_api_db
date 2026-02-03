import { Injectable } from '@nestjs/common';
import { Banner, Prisma } from '../generated/client/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class BannerService {

    constructor(private readonly prisma: PrismaService) {}

        create(createBannerDto: CreateBannerDto) {
            return `Bạn vừa tạo ra banner cho phim ${createBannerDto.maPhimId}`;
        }
        async findAll(queryDto: QueryDto) {
                    const { page, pageSize, filters, index } = buildQuery(queryDto);
        
                    const bannerPromise = this.prisma.banner.findMany({
                        where: filters,
                        skip: index,
                        take: pageSize,
                    });
        
                    const totalItemPromise = this.prisma.banner.count({ where: filters });
        
                    const [banner, totalItem] = await Promise.all([
                        bannerPromise,
                        totalItemPromise,
                    ]);
        
                    const totalPage = Math.ceil(totalItem / pageSize);
        
                    return {
                        items: banner || [],
                        page,
                        pageSize,
                        totalItem,
                        totalPage,
                    };
                    } 

        async findOne(maBanner: number) {
            return `Bạn vừa tìm được banner có mã #${maBanner}`;
        }

        async update(maBanner: number, updateBannerDto: UpdateBannerDto) {
            return `Bạn vừa cập nhật banner có mã #${maBanner}`;
        }

        async remove(maBanner: number){
            return `Bạn vừa xoá banner có mã #${maBanner}`;
        }


}
