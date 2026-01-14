import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class RegisterUserDto {

    @MaxLength(200)
    @IsString()
    @IsNotEmpty()
    hoTen: string;

    @MaxLength(100)
    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsInt()
    @MaxLength(20)
    @IsNotEmpty()
    soDt: number;
    
    @MaxLength(250)
    @IsString()
    @IsNotEmpty()
    matKhau: string;
    
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    loaiNguoiDung: string;

}