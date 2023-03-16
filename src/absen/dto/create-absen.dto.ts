import { IsNotEmpty } from "class-validator";

export class CreateAbsenDto {
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    noAbsen: number;

    @IsNotEmpty()
    kelas: string;

    @IsNotEmpty()
    tahunAjaran: number;
}