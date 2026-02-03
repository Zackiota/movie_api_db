import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsBoolean, MaxLength } from 'class-validator';

export class UpdatePhimDto {

        @ApiProperty({ example: "ten phim Abc"})
        @IsNotEmpty()
        @IsString()
        tenPhim: string;
        
        @ApiProperty({ example: "https://www.youtube.com/watch?v=example"})
        @IsOptional()
        @IsString()
        @IsNotEmpty()
        @MaxLength(500)
        trailer: string;
    
        @ApiProperty({ example: "https://image.example.com/phim.jpg"})  
        @IsOptional()
        @IsString()
        @IsNotEmpty()
        hinhAnh: string;
        
        @ApiProperty({ example: "2023-12-31"})
        @IsOptional()
        ngayKhoiChieu: Date;

        @ApiProperty({ example: 8 })
        @IsOptional()
        @IsNumber()
        danhGia: number;
        
        @ApiProperty({ example: false })
        @IsOptional()
        @IsBoolean()
        hot: boolean;
        
        @ApiProperty({ example: false })
        @IsOptional()
        @IsBoolean()
        dangChieu: boolean;
        
        @ApiProperty({ example: false })
        @IsOptional()
        @IsBoolean()
        sapChieu: boolean;
}