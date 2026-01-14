import { IsNumber, IsString } from 'class-validator'

export class CreatePhimDto {
    
    @Is
    @IsString()
    tenPhim: string;
    
    trailer: string;

    hinhAnh: string;
    
    ngayKhoiChieu: Date;
    
    danhGia: number;
    
    hot: number;
    
    dangChieu: boolean;
    
    sapChieu: boolean;

}