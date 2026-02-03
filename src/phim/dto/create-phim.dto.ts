import { IsNumber, IsString, IsNotEmpty, IsOptional, IsBoolean, MaxLength, IsDateString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreatePhimDto {
    
    @ApiProperty({ example: "Tên phim"})
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
    @IsDateString()
    @IsOptional()
    ngayKhoiChieu: string; //Send as "2023-12-31T00:00:00Z" or "2023-12-31"
    
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