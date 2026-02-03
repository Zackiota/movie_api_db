import { Injectable } from '@nestjs/common';
import { Prisma, RapPhim } from '../generated/client/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '../generated/client/client';
import { CreateRapPhimDto } from './dto/create-rap-phim.dto';
import { UpdateRapPhimDto } from './dto/update-rap-phim';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class RapPhimService {
    constructor(private readonly prisma: PrismaService) {}

    create(createRapPhimDto: CreateRapPhimDto) {
        return "This action adds a new rapPhim";
    }
    async findAll(queryDto: QueryDto) {
                const { page, pageSize, filters, index } = buildQuery(queryDto);
    
                const rapPhimPromise = this.prisma.phim.findMany({
                    where: filters,
                    skip: index,
                    take: pageSize,
                });
    
                const totalItemPromise = this.prisma.phim.count({ where: filters });
    
                const [rapPhim, totalItem] = await Promise.all([
                    rapPhimPromise,
                    totalItemPromise,
                ]);
    
                const totalPage = Math.ceil(totalItem / pageSize);
    
                return {
                    items: rapPhim || [],
                    page,
                    pageSize,
                    totalItem,
                    totalPage,
                };
                } 

    async findOne(maRap: number) {
        return `Bạn vừa tìm được #${maRap} rạp phim `;
    }

    update(maRap: number, updateRapPhimDto: UpdateRapPhimDto) {
        return `Bạn vừa cập nhật #${maRap} rạp phim `;
    }

    async remove(maRap: number) {
        return `Bạn vừa xoá #${maRap} rạp phim `;
    }   

}
