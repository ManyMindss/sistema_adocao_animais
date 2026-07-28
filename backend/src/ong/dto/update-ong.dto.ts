import { IsOptional,IsString,IsEmail } from "class-validator";

export class UpdateOngDto{
    @IsOptional()
    @IsString()
    nome?:string;

    @IsOptional()
    @IsString()
    localizacao?:string;
}