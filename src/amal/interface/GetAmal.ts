import { Amal } from "../dto/amal-entity";

export interface GetAmal{
    statusCode: number,
    message: string,
    data: Amal[]
}