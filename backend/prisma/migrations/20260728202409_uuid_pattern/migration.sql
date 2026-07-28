/*
  Warnings:

  - The primary key for the `Adotante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Ong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Telefone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `animais` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Adotante" DROP CONSTRAINT "Adotante_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_adotanteId_fkey";

-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_animalId_fkey";

-- DropForeignKey
ALTER TABLE "Interesse" DROP CONSTRAINT "Interesse_adotanteId_fkey";

-- DropForeignKey
ALTER TABLE "Interesse" DROP CONSTRAINT "Interesse_animalId_fkey";

-- DropForeignKey
ALTER TABLE "Ong" DROP CONSTRAINT "Ong_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_idAdotante_fkey";

-- DropForeignKey
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_idOng_fkey";

-- DropForeignKey
ALTER TABLE "animais" DROP CONSTRAINT "animais_idOng_fkey";

-- AlterTable
ALTER TABLE "Adotante" DROP CONSTRAINT "Adotante_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "usuarioId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Adotante_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Adotante_id_seq";

-- AlterTable
ALTER TABLE "Favorito" ALTER COLUMN "adotanteId" SET DATA TYPE TEXT,
ALTER COLUMN "animalId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Interesse" ALTER COLUMN "adotanteId" SET DATA TYPE TEXT,
ALTER COLUMN "animalId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ong" DROP CONSTRAINT "Ong_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "usuarioId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ong_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ong_id_seq";

-- AlterTable
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "idOng" SET DATA TYPE TEXT,
ALTER COLUMN "idAdotante" SET DATA TYPE TEXT,
ADD CONSTRAINT "Telefone_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Telefone_id_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Usuario_id_seq";

-- AlterTable
ALTER TABLE "animais" DROP CONSTRAINT "animais_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "idOng" SET DATA TYPE TEXT,
ADD CONSTRAINT "animais_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "animais_id_seq";

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

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_adotanteId_fkey" FOREIGN KEY ("adotanteId") REFERENCES "Adotante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interesse" ADD CONSTRAINT "Interesse_adotanteId_fkey" FOREIGN KEY ("adotanteId") REFERENCES "Adotante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interesse" ADD CONSTRAINT "Interesse_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;
