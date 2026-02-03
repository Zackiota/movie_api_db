import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLichChieuDto {
    
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ example: 1 })
    maLichChieu: number;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ example: 1 })
    maRap: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ example: 1 })
    maPhimId: number;

    @IsDateString()
    @ApiProperty({ example: "2023-12-31T15:30:00Z" })
    ngayChieu: string; //Send as "2023-12-31T15:30:00Z"
    
    @IsNumber()
    @ApiProperty({ example: 100000 })
    giaVe: number;

    @IsString()
    @ApiProperty({ example: "Lịch chiếu buổi tối" })
    title: string;
}