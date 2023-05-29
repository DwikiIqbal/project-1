import { IsNotEmpty, IsString } from "class-validator";

export class CreateAmalDto{
    @IsNotEmpty()
    @IsString()
    penyumbang: string

    @IsNotEmpty()
    @IsString()
    saluran: string

    @IsNotEmpty()
    nominal: number
}