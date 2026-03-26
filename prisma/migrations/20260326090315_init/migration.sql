-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `hashedPassword` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanHolders` (
    `LPANumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `effectivityDate` DATETIME(3) NOT NULL,
    `planType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`LPANumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentDetails` (
    `LPANumber` VARCHAR(191) NULL,
    `ORNumber` INTEGER NOT NULL,
    `ORDate` DATETIME(3) NOT NULL,
    `ORAmount` DOUBLE NOT NULL,

    UNIQUE INDEX `PaymentDetails_ORNumber_key`(`ORNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
