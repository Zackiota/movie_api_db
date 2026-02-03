-- CreateTable
CREATE TABLE `nguoi_dung` (
    `maTaiKhoan` INTEGER NOT NULL AUTO_INCREMENT,
    `hoTen` VARCHAR(200) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `soDt` VARCHAR(50) NOT NULL,
    `matKhau` VARCHAR(255) NOT NULL,
    `loaiNguoiDung` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `nguoi_dung_email_key`(`email`),
    PRIMARY KEY (`maTaiKhoan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lich_chieu` (
    `maLichChieu` INTEGER NOT NULL AUTO_INCREMENT,
    `maRapId` INTEGER NOT NULL,
    `maPhimId` INTEGER NOT NULL,
    `ngayGioChieu` DATETIME(0) NOT NULL,
    `giaVe` FLOAT NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `lich_chieu_maPhimId_fkey`(`maPhimId`),
    INDEX `lich_chieu_maRapId_fkey`(`maRapId`),
    PRIMARY KEY (`maLichChieu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `phim` (
    `maPhim` INTEGER NOT NULL AUTO_INCREMENT,
    `tenPhim` VARCHAR(200) NOT NULL,
    `trailer` VARCHAR(255) NOT NULL,
    `hinhAnh` VARCHAR(255) NOT NULL,
    `ngayKhoiChieu` DATETIME(0) NOT NULL,
    `danhGia` INTEGER NOT NULL,
    `hot` BOOLEAN NOT NULL DEFAULT false,
    `dangChieu` BOOLEAN NOT NULL DEFAULT false,
    `sapChieu` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`maPhim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rap_phim` (
    `maRap` INTEGER NOT NULL AUTO_INCREMENT,
    `tenRap` VARCHAR(200) NOT NULL,
    `maCumRap` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`maRap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dat_ve` (
    `maDatVe` INTEGER NOT NULL AUTO_INCREMENT,
    `maTaiKhoan` INTEGER NOT NULL,
    `maLichChieu` INTEGER NOT NULL,
    `maGheId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `dat_ve_maGheId_fkey`(`maGheId`),
    INDEX `dat_ve_maTaiKhoan_idx`(`maTaiKhoan`),
    INDEX `dat_ve_maLichChieu_idx`(`maLichChieu`),
    PRIMARY KEY (`maDatVe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ghe` (
    `maGhe` INTEGER NOT NULL AUTO_INCREMENT,
    `tenGhe` VARCHAR(100) NOT NULL,
    `loaiGhe` VARCHAR(100) NOT NULL,
    `maRapId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ghe_maRapId_fkey`(`maRapId`),
    PRIMARY KEY (`maGhe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cum_rap` (
    `maCumRap` INTEGER NOT NULL AUTO_INCREMENT,
    `tenCumRap` VARCHAR(200) NOT NULL,
    `diaChi` VARCHAR(255) NOT NULL,
    `maHeThongRap` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`maCumRap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `he_thong_rap` (
    `maHeThongRap` INTEGER NOT NULL AUTO_INCREMENT,
    `tenHeThongRap` VARCHAR(200) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`maHeThongRap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banner` (
    `maBanner` INTEGER NOT NULL AUTO_INCREMENT,
    `maPhimId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `banner_maPhimId_fkey`(`maPhimId`),
    PRIMARY KEY (`maBanner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lich_chieu` ADD CONSTRAINT `lich_chieu_maPhimId_fkey` FOREIGN KEY (`maPhimId`) REFERENCES `phim`(`maPhim`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lich_chieu` ADD CONSTRAINT `lich_chieu_maRapId_fkey` FOREIGN KEY (`maRapId`) REFERENCES `rap_phim`(`maRap`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dat_ve` ADD CONSTRAINT `dat_ve_maGheId_fkey` FOREIGN KEY (`maGheId`) REFERENCES `ghe`(`maGhe`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dat_ve` ADD CONSTRAINT `dat_ve_maTaiKhoan_fkey` FOREIGN KEY (`maTaiKhoan`) REFERENCES `nguoi_dung`(`maTaiKhoan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ghe` ADD CONSTRAINT `ghe_maRapId_fkey` FOREIGN KEY (`maRapId`) REFERENCES `rap_phim`(`maRap`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `banner` ADD CONSTRAINT `banner_maPhimId_fkey` FOREIGN KEY (`maPhimId`) REFERENCES `phim`(`maPhim`) ON DELETE RESTRICT ON UPDATE CASCADE;
