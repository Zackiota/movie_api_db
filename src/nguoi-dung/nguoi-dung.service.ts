import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { GetInfoDto } from './dto/get-info.dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/module-system/token/token.service';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';


@Injectable()
export class NguoiDungService {

    constructor(
        private readonly prisma: PrismaService, 
        private readonly tokenService: TokenService) {}

        async register(registerDto:RegisterDto) {
            const { email, matKhau, hoTen, soDt, loaiNguoiDung } = registerDto;
                console.log({ email, matKhau, hoTen, soDt, loaiNguoiDung }); 

                console.log(1)
            const userExists = await this.prisma.nguoiDung.findUnique(
                { where: 
                    { email: registerDto.email } 
                }
            );

            if (userExists) {
                throw new BadRequestException('Người dùng đã có tài khoản, vui lòng đăng nhập');
            }

            const hashedPassword =  bcrypt.hashSync(registerDto.matKhau, 10); // Salt rounds = 10

            const userNew  = await this.prisma.nguoiDung.create({
                data: {
                    hoTen: registerDto.hoTen,
                    email: registerDto.email,
                    matKhau: hashedPassword,
                    loaiNguoiDung: registerDto.loaiNguoiDung,
                    soDt: registerDto.soDt
                },
            },);

            return userNew;
   
        }

        async login(loginDto: LoginDto){
            const { email, matKhau } = loginDto;
            console.log({ email, matKhau }); 

            const userExists = await this.prisma.nguoiDung.findUnique({
                where: { email: loginDto.email } });
            if (!userExists) {
            throw new BadRequestException('Người dùng không tồn tại'); 
            }

            const isPassword = bcrypt.compareSync(matKhau, userExists.matKhau);
            if (!isPassword) {
                throw new BadRequestException('Mật khẩu chưa chính xác, vui long đăng nhập lại');
            }

            const tokens = this.tokenService.createTokens(userExists.maTaiKhoan);
            return { accessToken: tokens };
        }

        async getInfo(getInfoDto: GetInfoDto) {
            const userInfo = await this.prisma.nguoiDung.findUnique({
                    where: {
                        maTaiKhoan: getInfoDto.maTaiKhoan,
                    },
                    select: {
                        maTaiKhoan: true,
                        email: true,
                        hoTen: true,
                        soDt: true,
                        loaiNguoiDung: true,
                        
                    },
            });
            return userInfo;
        }

        async findMany() {
            return this.prisma.nguoiDung.findMany();
        }

        async findOne(maTaiKhoan: number) {
            return this.prisma.nguoiDung.findUnique({
                where: {
                    maTaiKhoan: maTaiKhoan,
                }
            });
        }

        async update(maTaiKhoan: number, updateNguoiDungDto: UpdateNguoiDungDto) {
            return this.prisma.nguoiDung.update({ 
                where: { maTaiKhoan: maTaiKhoan }, 
                data: updateNguoiDungDto
            });
        }

        async remove(maTaiKhoan: number) {
            return this.prisma.nguoiDung.delete({ 
                where: { 
                    maTaiKhoan: maTaiKhoan,
                } });
        }
        
    }

