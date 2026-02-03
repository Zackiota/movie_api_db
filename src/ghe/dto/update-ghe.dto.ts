import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateGheDto {
    // Define properties for creating a ghe if needed
    
    @IsString()
    @IsNotEmpty()
    tenGhe: string;

    @IsString()
    @IsNotEmpty()
    loaiGhe: string;


    @IsNotEmpty()
    @IsNumber() 
    maRapId: number
}