-- CreateTable
CREATE TABLE `Driver` (
    `DriverId` INTEGER NOT NULL AUTO_INCREMENT,
    `DriverName` VARCHAR(191) NULL,
    `DriverDOB` VARCHAR(191) NULL,
    `DriverEmail` VARCHAR(191) NULL,
    `DriverPhone` VARCHAR(191) NULL,
    `DriverLocation` VARCHAR(191) NULL,
    `DriverLat` DOUBLE NULL,
    `DriverLng` DOUBLE NULL,

    PRIMARY KEY (`DriverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DriverOrder` (
    `DriverOrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `DriverId` INTEGER NULL,

    PRIMARY KEY (`DriverOrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DriverOrder` ADD CONSTRAINT `DriverOrder_DriverId_fkey` FOREIGN KEY (`DriverId`) REFERENCES `Driver`(`DriverId`) ON DELETE SET NULL ON UPDATE CASCADE;
