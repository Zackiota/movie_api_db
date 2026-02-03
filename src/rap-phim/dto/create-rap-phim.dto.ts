import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateRapPhimDto {
    
    @MaxLength(255)
    @IsNotEmpty()
    @IsString()
    tenRap: string;
    
    @IsNotEmpty()
    @IsNumber() 
    maCumRap: number;
    
    @IsNotEmpty()
    @IsNumber()
    maPhim: number;
}