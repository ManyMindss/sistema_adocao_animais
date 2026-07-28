import { SexoAnimal, StatusAnimal } from "@prisma/client";
import { IsNotEmpty,IsString,IsOptional,IsNumber, IsEnum } from "class-validator";

export class CreateAnimalDto{ 
  @IsNotEmpty  ({message : 'O ID da ONG é obrigatório'})
  @IsNumber()
  idOng:string;

  @IsNotEmpty({message: 'O nome do animal é obrigatorio'})
  @IsString()
  nome:string;
  
  @IsOptional()
  @IsString ()
  raca?:string;

  @IsOptional() 
  @IsEnum (SexoAnimal,{message:'sexo deve ser MACHHO ou FEMEA'})
  sexo?: SexoAnimal;

  @IsOptional() 
  @IsString ()      
  cor?:string; 

  @IsOptional() 
  @IsNumber()
  idade?:number;

  @IsOptional() 
  @IsString ()     
  temperamento?:string;

  @IsOptional() 
  @IsString ()
  porte?:string;

  @IsOptional() 
  @IsString ()       
  pelagem?:string;
  
  @IsOptional() 
  @IsEnum (StatusAnimal,{message: 'Status inválido' })
  status?: StatusAnimal;  
}