import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDatVeDto {

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
