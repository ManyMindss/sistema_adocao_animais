import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
} from "class-validator";

export class CreateAdotanteDto {
  @IsNotEmpty({ message: "O ID do adotante é obrigatório" })
  @IsString()
  id: string;

  @IsNotEmpty({ message: "O nome é obrigatorio" })
  @IsString()
  @ApiProperty({
    example: "Maria Silva",
  })
  nome: string;

  @IsNotEmpty({ message: "A localização é obrigatoria" })
  @IsString()
  @ApiProperty({
    example: "São Paulo",
  })
  localizacao: string;

  @IsNotEmpty({ message: "A data de nascinmento é obrigatoria" })
  @IsString()
  @ApiProperty({
    example: "1990-01-01",
  })
  dataNascimento: string;
}
