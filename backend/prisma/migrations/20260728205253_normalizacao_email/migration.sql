/*
  Warnings:

  - You are about to drop the column `email` on the `Adotante` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Ong` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Adotante" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Ong" DROP COLUMN "email";
