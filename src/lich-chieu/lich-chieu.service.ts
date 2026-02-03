import { Injectable } from '@nestjs/common';
import { LichChieu, Prisma } from '../generated/client/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateLichChieuDto } from './dto/update-lich-chieu.dto';
import { CreateLichChieuDto} from './dto/create-lich-chieu.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';


@Injectable()
export class LichChieuService {

    constructor(private readonly prisma: PrismaService) {}

        create(createLichChieuDto: CreateLichChieuDto){
            return `Bạn vừa tạo ra lịch chiếu phim ${createLichChieuDto.maPhimId} tại rạp số ${createLichChieuDto.maRap}`;
        }
        
        async findAll(queryDto: QueryDto) {
            const { page, pageSize, filters, index } = buildQuery(queryDto);

            const lichChieuPromise = this.prisma.lichChieu.findMany({
                where: filters,
                skip: index,
                take: pageSize,
            });

            const totalItemPromise = this.prisma.lichChieu.count({ where: filters });

            const [lichChieu, totalItem] = await Promise.all([
                lichChieuPromise,
                totalItemPromise,
            ]);

            const totalPage = Math.ceil(totalItem / pageSize);

            return {
                items: lichChieu || [],
                page,
                pageSize,
                totalItem,
                totalPage,
            };
            } 
    
        async findOne(maLichChieu: number) {
            return `Bạn vừa tìm thấy một mã #${maLichChieu} lịch chiếu`;
        }
        async update (maLichChieu: number, UpdateLichChieuDto: UpdateLichChieuDto) {
            return `Bạn vừa cập nhật một mã #${maLichChieu} lịch chiếu`;
        }
        async remove(maLichChieu: number) {
            return `Bạn vừa xoá một mã #${maLichChieu} lịch chiếu`;
        }
}
