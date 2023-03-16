import { IsNotEmpty } from "class-validator"

export class UpdateSiswaDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    kelas: string;

    @IsNotEmpty()
    tahunAjaran: number;

}