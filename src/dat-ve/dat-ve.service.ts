import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DatVe, Prisma } from '../generated/client/client';
import { CreateDatVeDto } from './dto/create-datVe.dto';
import { UpdateDatVeDto } from './dto/update-datVe.dto';
import { buildQuery } from 'src/common/helper/build-query';
import { QueryDto } from 'src/common/dto/query.dto';


@Injectable()
export class DatVeService {

    constructor(private readonly prisma: PrismaService) {}

        create(createDatVeDto: CreateDatVeDto) {
            return `Bạn vừa đặt vé cho lịch chiếu mã ${createDatVeDto.maLichChieu} thành công!`;
        }
        async findAll(queryDto: QueryDto) {
                    const { page, pageSize, filters, index } = buildQuery(queryDto);
        
                    const datVePromise = this.prisma.datVe.findMany({
                        where: filters,
                        skip: index,
                        take: pageSize,
                    });
        
                    const totalItemPromise = this.prisma.datVe.count({ where: filters });
        
                    const [datVe, totalItem] = await Promise.all([
                        datVePromise,
                        totalItemPromise,
                    ]);
        
                    const totalPage = Math.ceil(totalItem / pageSize);
        
                    return {
                        items: datVe || [],
                        page,
                        pageSize,
                        totalItem,
                        totalPage,
                    };
                    } 

        async findOne(maDatVe: number) {
            return `Bạn đã tìm thấy vé số #${maDatVe}`;
        }

        async update(maDatVe: number, updateDatVeDto: UpdateDatVeDto) {
            return `Bạn vừa cập nhật vé có mã #${maDatVe}`;
        }

        async remove(maDatVe: number){
            return `Bạn vừa xoá vé có mã #${maDatVe}`;
        }   
}
