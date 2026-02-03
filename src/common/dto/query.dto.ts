
import { IsNumber, IsOptional, Min, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '../../generated/client/client'; 

export class QueryDto {
  @ApiProperty({ example: 1, required: false, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'page must be a number' })
  @Min(1)
  page?: number = 1;

  @ApiProperty({ example: 10, required: false, default: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'pageSize must be a number' })
  @Min(1)
  pageSize?: number = 10;

  @ApiPropertyOptional({
    example: { tenPhim: { contains: 'avatar' }, hot: true },
    description: 'Prisma-style where filter (object)',
  })
  @IsOptional()
  @IsObject()
  filters?: Prisma.PhimWhereInput; // ← type it properly (or any if generic)
}







/* import { IsNotEmpty, IsNumber, IsOptional, Min, IsJSON } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
    

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    page: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    pageSize: number;

    @IsOptional()
    @IsJSON()
    filters?: string;
} */


