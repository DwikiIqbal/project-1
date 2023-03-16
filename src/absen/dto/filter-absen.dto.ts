import { IsNotEmpty, IsOptional } from "class-validator";

export class FilterAbsenDto {
   @IsOptional()
    nama: string;

   @IsOptional()
    noAbsen: number;

   @IsOptional()
    kelas: string;

   @IsOptional()
    tahunAjaran: number
}