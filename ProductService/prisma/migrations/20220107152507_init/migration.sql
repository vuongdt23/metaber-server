-- CreateTable
CREATE TABLE `Product` (
    `ProductId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` VARCHAR(191) NULL,
    `ProductAddDate` VARCHAR(191) NULL,
    `ProductDescription` VARCHAR(191) NULL,
    `ProductPrice` INTEGER NULL,
    `ProductAvailable` BOOLEAN NULL,
    `ProductOriginAddress` VARCHAR(191) NULL,
    `ProductOriginLat` DOUBLE NULL,
    `ProductOriginLng` DOUBLE NULL,

    PRIMARY KEY (`ProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductOrder` (
    `ProductOrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductId` INTEGER NULL,
    `OrderInt` INTEGER NULL,

    PRIMARY KEY (`ProductOrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductOrder` ADD CONSTRAINT `ProductOrder_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`ProductId`) ON DELETE SET NULL ON UPDATE CASCADE;
