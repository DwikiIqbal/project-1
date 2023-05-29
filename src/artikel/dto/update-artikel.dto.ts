import { IsNotEmpty } from "class-validator";

export class UpdateArtikelDto{
    @IsNotEmpty()
    judulArtikel: string;

    @IsNotEmpty()
    kategoriArtikel: string[]

    @IsNotEmpty()
    isiArtikel: string;

    @IsNotEmpty()
    pembuatArtikel: string;
}