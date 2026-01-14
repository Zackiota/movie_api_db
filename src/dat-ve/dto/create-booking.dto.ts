import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateBookingDto {

    @IsNumber()
    @IsNotEmpty()
    maLichChieu: number;
    
    @IsNumber()
    @IsNotEmpty()
    maGhe: number;
    
    @IsNumber()
    @IsNotEmpty()
    maPhim: number;
}
