import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from "class-validator";
import { Role } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsNotEmpty({ message: "O campo nome não pode estar vazio." })
  @IsString({ message: "O Nome deve ser Textof" })
  @ApiProperty({
    example: "Maria Silva",
  })
  nome: string;

  @IsNotEmpty({ message: "O campo Email não pode estar vazio." })
  @IsEmail({}, { message: "Formato de email inválido" })
  @ApiProperty({
    example: "maria@example.com",
  })
  email: string;

  @IsNotEmpty({ message: "A senha é obrigatória" })
  @IsString()
  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
  @ApiProperty({
    example: "123456",
  })
  senha: string;

  @IsNotEmpty({ message: "O tipo de usuário é obrigatório" })
  @IsEnum(Role, { message: "Escolha uma das opções INSTITUICAO ou ADOTANTE" })
  @ApiProperty({
    example: Role.ADOTANTE,
  })
  role: Role;
}
