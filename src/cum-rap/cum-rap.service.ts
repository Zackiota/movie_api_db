import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CumRap, Prisma } from '../generated/client/client';
import { CreateCumRapDto } from './dto/create-cumRap.dto';
import { UpdateCumRapDto } from './dto/update-cumRap.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class CumRapService {

    constructor(private readonly prisma: PrismaService) {}

        create(createCumRapDto: CreateCumRapDto) {
            return `Bạn vừa thêm một cụm rạp mã #${createCumRapDto.maCumRap}`;
        }
        async findAll(queryDto: QueryDto) {
                    const { page, pageSize, filters, index } = buildQuery(queryDto);
        
                    const cumRapPromise = this.prisma.cumRap.findMany({
                        where: filters,
                        skip: index,
                        take: pageSize,
                    });
        
                    const totalItemPromise = this.prisma.cumRap.count({ where: filters });
        
                    const [cumRap, totalItem] = await Promise.all([
                        cumRapPromise,
                        totalItemPromise,
                    ]);
        
                    const totalPage = Math.ceil(totalItem / pageSize);
        
                    return {
                        items: cumRap || [],
                        page,
                        pageSize,
                        totalItem,
                        totalPage,
                    };
                    } 

        async findOne(maCumRap: number){
            return `Bạn vừa tìm thấy cụm rạp số #${maCumRap}`;
        }

        async update(maCumRap: number, updateCumRapDto: UpdateCumRapDto) {
            return `Bạn vừa cập nhật cụm rạp số #${maCumRap}`;
        }

        async remove(maCumRap: number, updateCumRapDto: UpdateCumRapDto) {
            return `Bạn vừa xoá cụm rạp số #${maCumRap}`;
        }


}
