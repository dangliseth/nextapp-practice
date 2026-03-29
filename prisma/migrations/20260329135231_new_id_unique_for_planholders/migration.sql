/*
  Warnings:

  - The primary key for the `planholders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[LPANumber]` on the table `PlanHolders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `PlanHolders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `planholders` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `PlanHolders_LPANumber_key` ON `PlanHolders`(`LPANumber`);
