import { IsOptional,IsString,IsNumber,IsEnum } from "class-validator";
import {SexoAnimal,StatusAnimal} from '@prisma/client';

export class UpdateAnimalDto {
    @IsOptional()
    @IsString()
    nome?:string;

   @IsOptional()
   @IsString()
   raca?: string;

   @IsOptional()
   @IsEnum(SexoAnimal,{message:'Sexo dever MACHO ou FEMEA'})
   sexo?:SexoAnimal;
   
   @IsOptional ()
   @IsString()
   coer?:string

   @IsOptional()
   @IsNumber ()
   idade?:number

   @IsOptional()
   @IsString()
   temperamento? :string;

   @IsOptional()
   @IsString()
   porte?:string;

   @IsOptional()
   @IsEnum(StatusAnimal,{message:'Status inválido'})
   status?: StatusAnimal;


}


export class StatusPetDto{   
 status?: "DISPONIVEL" | "ADOTADO" | "EM_TRATAMENTO" | "AGUARDANDO_VISITA";  
}