import { IsNotEmpty,  IsNumber,  IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetInfoDto {


    @ApiProperty({ example: "1" })
    @IsNotEmpty()
    @IsNumber()
    maTaiKhoan: number;

    @ApiProperty({ example: "Nguyen Van A" })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    hoTen: string;

    @ApiProperty({ example: "0909123456" })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    soDt: string;

    @ApiProperty({ example: "KhachHang" })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    loaiNguoiDung: string;
}   