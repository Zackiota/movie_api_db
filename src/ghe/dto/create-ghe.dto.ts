import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateGheDto {
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