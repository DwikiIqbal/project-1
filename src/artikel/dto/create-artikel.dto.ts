import { IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class CreateArtikelDto {
    @IsNotEmpty()
    @IsString()
    judulArtikel: string

    @IsString({ each: true })
    kategoriArtikel: string[]

    @IsNotEmpty()
    @IsString()
    isiArtikel: string

    @IsNotEmpty()
    @IsString()
    pembuatArtikel: string
}