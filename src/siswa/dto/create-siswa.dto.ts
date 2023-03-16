import { IsNotEmpty, IsString } from "class-validator";


export class CreateSiswaDto{
   
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    kelas: string;

    @IsNotEmpty()
    tahunAjaran: number
}