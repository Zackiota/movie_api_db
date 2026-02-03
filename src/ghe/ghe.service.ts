import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Ghe, Prisma } from '../generated/client/client';
import { UpdateGheDto } from './dto/update-ghe.dto';
import { CreateGheDto } from './dto/create-ghe.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class GheService {
    constructor(private readonly prisma: PrismaService) {}

    create(CreateGheDto: CreateGheDto) {
        return `Bạn vừa tạo ra 1 ghế cho rạp phim ${CreateGheDto.maRapId}`;
    }
    async findAll(queryDto: QueryDto) {
                const { page, pageSize, filters, index } = buildQuery(queryDto);
    
                const ghePromise = this.prisma.ghe.findMany({
                    where: filters,
                    skip: index,
                    take: pageSize,
                });
    
                const totalItemPromise = this.prisma.ghe.count({ where: filters });
    
                const [ghe, totalItem] = await Promise.all([
                    ghePromise,
                    totalItemPromise,
                ]);
    
                const totalPage = Math.ceil(totalItem / pageSize);
    
                return {
                    items: ghe || [],
                    page,
                    pageSize,
                    totalItem,
                    totalPage,
                };
                } 

    async findOne(maGhe: number) {
        return `Bạn vừa tìm thấy một mã #${maGhe} ghế `;
    }

    async update(maGhe: number, updateGheDto: UpdateGheDto) {
        return `Bạn vừa cập nhật một mã #${maGhe} ghế`;
    }
    async remove(maGhe: number) {
        return `Bạn vừa xoá ghế có mã #${maGhe}`;
    }   


}
