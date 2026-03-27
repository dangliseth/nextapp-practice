-- AlterTable
ALTER TABLE `paymentdetails` MODIFY `ORDate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `planholders` MODIFY `effectivityDate` VARCHAR(191) NULL,
    MODIFY `planType` VARCHAR(191) NULL;
