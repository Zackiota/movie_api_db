import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Phim } from '../generated/client/client';
import { CreatePhimDto } from './dto/create-phim.dto';
import { UpdatePhimDto } from './dto/update-phim.dto';
import { buildQuery } from '../common/helper/build-query';
import { QueryDto } from '../common/dto/query.dto';


@Injectable()
export class PhimService {
    constructor(private readonly prisma: PrismaService) {}
        create(createPhimDto: CreatePhimDto) {
            return "Bạn vừa tạo thêm 1 phim mới";
        }

        async findAll(queryDto: QueryDto) {
            const { page, pageSize, filters, index } = buildQuery(queryDto);

            const phimPromise = this.prisma.phim.findMany({
                where: filters,
                skip: index,
                take: pageSize,
            });

            const totalItemPromise = this.prisma.phim.count({ where: filters });

            const [phim, totalItem] = await Promise.all([
                phimPromise,
                totalItemPromise,
            ]);

            const totalPage = Math.ceil(totalItem / pageSize);

            return {
                items: phim || [],
                page,
                pageSize,
                totalItem,
                totalPage,
            };
            } 

        async findOne(maPhim: number) {
            return `Bạn vừa tìm được #${maPhim} phim`;
        }
        async update (maPhim: number, updatePhimDto: UpdatePhimDto) {
            return `Bạn vừa cập nhật #${maPhim} phim`;
        }
        async remove(maPhim: number) {
            return `Bạn vừa xoá #${maPhim} phim`;
        }
}

