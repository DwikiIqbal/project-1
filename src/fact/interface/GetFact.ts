import { Fact } from "../dto/fact-entity";

export interface GetFact{
    statusCode: number,
    message: string,
    data: Fact[]
}