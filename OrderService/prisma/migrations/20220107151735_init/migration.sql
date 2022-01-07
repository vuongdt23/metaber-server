-- CreateTable
CREATE TABLE `Order` (
    `OrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderCreatedTime` VARCHAR(191) NULL,
    `OrderDeliverTime` VARCHAR(191) NULL,
    `OrderFee` INTEGER NULL,
    `OrderPrice` INTEGER NULL,
    `OrderOriginAddress` VARCHAR(191) NULL,
    `OrderOriginLat` DOUBLE NULL,
    `OrderOriginLng` DOUBLE NULL,
    `OrderDesAddress` VARCHAR(191) NULL,
    `OrderDesLat` DOUBLE NULL,
    `OrderDesLng` DOUBLE NULL,
    `OrderPaymentAmount` INTEGER NULL,
    `OrderStatusId` INTEGER NULL,

    PRIMARY KEY (`OrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderStatus` (
    `OrderStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderStatusName` VARCHAR(191) NOT NULL,
    `OrderStatusDescription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`OrderStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDriver` (
    `OrderDriverId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderId` INTEGER NULL,

    UNIQUE INDEX `OrderDriver_OrderId_key`(`OrderId`),
    PRIMARY KEY (`OrderDriverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderUser` (
    `OrderUserId` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderId` INTEGER NULL,

    UNIQUE INDEX `OrderUser_OrderId_key`(`OrderId`),
    PRIMARY KEY (`OrderUserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_OrderStatusId_fkey` FOREIGN KEY (`OrderStatusId`) REFERENCES `OrderStatus`(`OrderStatusId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDriver` ADD CONSTRAINT `OrderDriver_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`OrderId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderUser` ADD CONSTRAINT `OrderUser_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`OrderId`) ON DELETE SET NULL ON UPDATE CASCADE;
