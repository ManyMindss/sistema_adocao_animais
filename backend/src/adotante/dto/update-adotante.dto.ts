import { IsOptional,IsString,IsEmail,IsDateString } from "class-validator";

export class UpdateAdotanteDto{
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    localizacao?: string;

    @IsOptional()
    @IsDateString()
    dataNascimento?: string;
}
