import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UpdateHeThongRapDto {

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    tenHeThongRap: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    logo: string;
}