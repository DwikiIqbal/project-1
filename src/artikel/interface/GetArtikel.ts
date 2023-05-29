import { Artikel } from "../dto/artikel-entity";

export interface GetArtikel{
    statusCode: number,
    message: string,
    data: Artikel[]
}