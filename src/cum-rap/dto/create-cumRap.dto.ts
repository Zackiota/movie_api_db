import { IsNotEmpty, IsNumber, IsString,  MaxLength } from 'class-validator'

export class CreateCumRapDto {

    @IsNotEmpty()
    @IsNumber()
    maCumRap: number;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    tenCumRap: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    diaChi: string; 

    @IsNotEmpty()
    @IsNumber() 
    maHeThongRap: number;

}