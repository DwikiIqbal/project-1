import { Type } from 'class-transformer';
import { IsOptional, IsInt } from "class-validator";

export class FilterBookDto {
    @IsOptional()
    title: string;

    @IsOptional()
    author: string;

    @IsOptional()
    kategori: string;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    min_year: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    max_year: number
}