import { IsNotEmpty, IsString } from "class-validator"

export class CreateFactDto{
    @IsNotEmpty()
    @IsString()
    judulFakta: string

    @IsNotEmpty()
    @IsString()
    isiFakta: string

    @IsNotEmpty()
    @IsString()
    sumberFakta: string
}