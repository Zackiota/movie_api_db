import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Phim } from '@prisma/client';

@Injectable()
export class PhimService {
    constructor (private prisma: PrismaService) {
        console.log('🔍 DATABASE_URL in PhimService:', process.env.DATABASE_URL || undefined);
    }
        async create(data: Prisma.PhimCreateInput): Promise<Phim> {
            return this.prisma.phim.create({ data: data });
        }
        async findAll(): Promise<Phim[]> {
            return this.prisma.phim.findMany({
                include: {
                    banners: true, 
                    lichChieus: { 
                        include: { 
                            maRap: true
                        },
                    }
            }});
        }
        async findOne(maPhim: number): Promise<Phim | null> {
            return this.prisma.phim.findUnique({ 
                where: { maPhim: maPhim }, 
                include: {
                    banners: true, 
                    lichChieus: { 
                        include: { maRap: true }
                    },
                }
            });
        }
        async update (maPhim: number, data: Prisma.PhimUpdateInput): Promise<Phim> {
            return this.prisma.phim.update({ 
                where: { maPhim: maPhim }, 
                data: data 
            });
        }
        async remove(maPhim: number) {
            return this.prisma.phim.delete({ where: { maPhim: maPhim } });
        }
}

