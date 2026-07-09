-- CreateTable
CREATE TABLE "Interesse" (
    "id" SERIAL NOT NULL,
    "adotanteId" INTEGER NOT NULL,
    "animalId" INTEGER NOT NULL,
    "mensagem" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Interesse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interesse_adotanteId_animalId_key" ON "Interesse"("adotanteId", "animalId");

-- AddForeignKey
ALTER TABLE "Interesse" ADD CONSTRAINT "Interesse_adotanteId_fkey" FOREIGN KEY ("adotanteId") REFERENCES "Adotante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interesse" ADD CONSTRAINT "Interesse_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animais"("id") ON DELETE CASCADE ON UPDATE CASCADE;
