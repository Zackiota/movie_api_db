import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { NguoiDung} from '@prisma/client';

@Injectable()
export class NguoiDungService {

    constructor(private readonly prisma: PrismaService, private jwtService: JwtService) {}

        async register(dto: RegisterUserDto): Promise<{ accessToken: string }> {
            const existingUser = await this.prisma.nguoiDung.findUnique(
                { where: { email: dto.email } }
            );
            if (existingUser) {
            throw new BadRequestException('Người dùng đã có tài khoản');
            }

            const hashedPassword = await bcrypt.hash(dto.matKhau, 10); // Salt rounds = 10

            const nguoiDung  = await this.prisma.nguoiDung.create({
                data: {
                    hoTen: dto.hoTen,
                    email: dto.email,
                    soDt: dto.soDt,
                    matKhau: hashedPassword,
                    loaiNguoiDung: dto.loaiNguoiDung,
                },
            },
            );

            const token = this.generateToken(nguoiDung);
            return { accessToken: token };
        }

        async login(dto: LoginUserDto): Promise<{ accessToken: string }> {
            const user = await this.prisma.nguoiDung.findUnique({ where: { email: dto.email } });
            if (!user) {
            throw new UnauthorizedException('Invalid credentials');
            }

            const passwordMatch = await bcrypt.compare(dto.matKhau, user.matKhau);
            if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials');
            }

            const token = this.generateToken(user);
            return { accessToken: token };
        }

            private generateToken(user: NguoiDung): string {
                const payload = { email: user.email, sub: user.maTaiKhoan, hoTen: user.hoTen };
                return this.jwtService.sign(payload);
            }

        async findMany(): Promise<NguoiDung[]> {
            return this.prisma.nguoiDung.findMany();
        }

        async findOne(maTaiKhoan: number): Promise<NguoiDung | null> {
            return this.prisma.nguoiDung.findUnique({ where: { maTaiKhoan: maTaiKhoan } });
        }

        async update(maTaiKhoan: number, data: Prisma.NguoiDungUpdateInput): Promise<NguoiDung> {
            return this.prisma.nguoiDung.update({ where: { maTaiKhoan: maTaiKhoan }, data: data });
        }

        async remove(maTaiKhoan: number) {
            return this.prisma.nguoiDung.delete({ where: { maTaiKhoan: maTaiKhoan } });
        }

    }



    


