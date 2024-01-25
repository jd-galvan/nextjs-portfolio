-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "siteUrl" TEXT;

-- CreateTable
CREATE TABLE "TechnologiesOnProjects" (
    "technologyId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "TechnologiesOnProjects_pkey" PRIMARY KEY ("technologyId","projectId")
);

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
