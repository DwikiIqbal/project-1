import { IsNotEmpty } from "class-validator";

export class UpdateFactDto{
    @IsNotEmpty()
    judulFakta: string;

    @IsNotEmpty()
    isiFakta: string;

    @IsNotEmpty()
    sumberFakta: string;
}