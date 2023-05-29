import { Toko } from "../dto/toko-entity";

export interface GetToko{
    statusCode: number;
    message: string;
    data: Toko[]
}