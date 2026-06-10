import { IsNotEmpty,IsString,IsOptional,IsEmail } from "class-validator";

export class CreateOngDto{
    @IsNotEmpty ({message:'O nome é obrigatorio'})
    @IsString()
    nome:string;
    
    @IsNotEmpty({message:'A localizaçãoo é obrigatoria'})
    @IsString()
    localizacao: string;

    @IsNotEmpty()
    @IsEmail({},{message:'Email invalido'})
    email?: string;
}