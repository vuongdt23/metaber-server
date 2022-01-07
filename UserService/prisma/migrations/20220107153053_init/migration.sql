-- CreateTable
CREATE TABLE `User` (
    `UserId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(191) NULL,
    `UserEmail` VARCHAR(191) NULL,
    `UserDoB` VARCHAR(191) NULL,
    `UserAddress` VARCHAR(191) NULL,
    `UserAddressLat` DOUBLE NULL,
    `UserAddressLng` DOUBLE NULL,
    `UserPhone` VARCHAR(191) NULL,
    `UserAccountId` VARCHAR(191) NULL,
    `UserTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserType` (
    `UserTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserTypeName` VARCHAR(191) NULL,
    `UserTypeDescription` VARCHAR(191) NULL,

    PRIMARY KEY (`UserTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_UserTypeId_fkey` FOREIGN KEY (`UserTypeId`) REFERENCES `UserType`(`UserTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
