import { IsNotEmpty,IsString,IsOptional,IsEmail,IsDateString } from "class-validator";

export class CreateAdotanteDto{
    @IsNotEmpty({message:'O nome é obrigatorio'})
    @IsString()
    nome : string ;


    @IsNotEmpty({message:'A localização é obrigatoria' })
    @IsString()
    localizacao:string;

    @IsOptional()
    @IsEmail({},{message:'Email invalido'})
    email?:string;

    @IsNotEmpty({message:'A data de nascinmento é obrigatoria'})
    @IsString()
    dataNascimento :string ;
    
}
