import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTokoDto {
    @IsNotEmpty()
    @IsString()
    namaBarang: string

    @IsNotEmpty()
    @IsString()
    jenisBarang: string

    @IsNotEmpty()
    hargaBarang: number
}