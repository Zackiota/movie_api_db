import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HeThongRap, Prisma } from '../generated/client/client';
import { CreateHeThongRapDto } from './dto/create-heThongRap.dto';
import { UpdateHeThongRapDto } from './dto/update-heThongRap.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class HeThongRapService {

    constructor(private readonly prisma: PrismaService) {}

        create(createHeThongRapDto: CreateHeThongRapDto) {
            return `Bạn đã tạo hệ thống rạp ${createHeThongRapDto.tenHeThongRap}`;
        }
        async findAll(queryDto: QueryDto) {
                    const { page, pageSize, filters, index } = buildQuery(queryDto);
        
                    const heThongRapPromise = this.prisma.heThongRap.findMany({
                        where: filters,
                        skip: index,
                        take: pageSize,
                    });
        
                    const totalItemPromise = this.prisma.heThongRap.count({ where: filters });
        
                    const [heThongRap, totalItem] = await Promise.all([
                        heThongRapPromise,
                        totalItemPromise,
                    ]);
        
                    const totalPage = Math.ceil(totalItem / pageSize);
        
                    return {
                        items: heThongRap || [],
                        page,
                        pageSize,
                        totalItem,
                        totalPage,
                    };
                    } 

        async findOne(maHeThongRap: number) {
            return `Bạn vừa tìm thấy hệ thống rạp số #${maHeThongRap}`;
        }

        async update(maHeThongRap: number, updateHeThongRapDto: UpdateHeThongRapDto) {
            return `Bạn vừa cập nhật hệ thống rạp số #${maHeThongRap}`;
        }

        async remove(maHeThongRap: number) {
            return `Bạn vừa xoá hệ thống rạp số #${maHeThongRap}`;
        }
}