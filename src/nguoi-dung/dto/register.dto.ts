import { IsInt, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {

    @ApiProperty({ example: "Tra"})
    @MaxLength(200)
    @IsString()
    @IsNotEmpty()
    hoTen: string;

    @ApiProperty({ example: "hoa1@gmail.com"})
    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({ example: "0909123456"})
    @IsNotEmpty()
    @IsPhoneNumber('VN')
    @Matches(/^(0|\+84)[0-9]{9,10}$/, { message: 'Số điện thoại không hợp lệ' })
    soDt: string;
    
    @ApiProperty({ example: "MatKhau@123"})
    @MaxLength(250)
    @IsString()
    @IsNotEmpty()
    matKhau: string;
    
    @ApiProperty({ example: "KhachHang"})
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    loaiNguoiDung: string;

}