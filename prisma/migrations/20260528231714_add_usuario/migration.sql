-- CreateEnum
CREATE TYPE "StatusAnimal" AS ENUM ('DISPONIVEL', 'ADOTADO', 'EM_TRATAMENTO', 'AGUARDANDO_VISITA');

-- CreateEnum
CREATE TYPE "SexoAnimal" AS ENUM ('MACHO', 'FEMEA');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INSTITUICAO', 'ADOTANTE');

-- CreateTable
CREATE TABLE "Ong" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "localizacao" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100),
    "usuarioId" INTEGER,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animais" (
    "id" SERIAL NOT NULL,
    "idOng" INTEGER NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "raca" VARCHAR(60),
    "sexo" "SexoAnimal",
    "cor" VARCHAR(50),
    "idade" INTEGER,
    "temperamento" VARCHAR(50),
    "pelagem" VARCHAR(50),
    "porte" VARCHAR(30),
    "status" "StatusAnimal" NOT NULL DEFAULT 'DISPONIVEL',

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adotante" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "localizacao" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100),
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,

    CONSTRAINT "Adotante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(20) NOT NULL,
    "tipoTelefone" VARCHAR(20) NOT NULL DEFAULT 'CELULAR',
    "idOng" INTEGER,
    "idAdotante" INTEGER,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADOTANTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ong_usuarioId_key" ON "Ong"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Adotante_usuarioId_key" ON "Adotante"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Ong" ADD CONSTRAINT "Ong_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animais" ADD CONSTRAINT "animais_idOng_fkey" FOREIGN KEY ("idOng") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adotante" ADD CONSTRAINT "Adotante_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_idOng_fkey" FOREIGN KEY ("idOng") REFERENCES "Ong"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_idAdotante_fkey" FOREIGN KEY ("idAdotante") REFERENCES "Adotante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
