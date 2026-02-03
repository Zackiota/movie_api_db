import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDatVeDto {

    @IsNumber()
    @IsNotEmpty()
    maTaiKhoan: number;

    @IsNumber()
    @IsNotEmpty()
    maLichChieu: number;

    @IsNumber()
    @IsNotEmpty()
    maGheId: number;
}
