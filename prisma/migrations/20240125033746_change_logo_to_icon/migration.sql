/*
  Warnings:

  - You are about to drop the column `logo` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `icon` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "logo",
ADD COLUMN     "icon" TEXT NOT NULL;
