import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBannerDto {

    @IsNumber()
    @IsNotEmpty()
    maPhimId: number; // Define properties for creating a banner if needed
}