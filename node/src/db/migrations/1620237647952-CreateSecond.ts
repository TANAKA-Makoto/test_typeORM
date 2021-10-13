import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSecond1620237647952 implements MigrationInterface {
    name = 'CreateSecond1620237647952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `organization` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `facility` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, `ownerId` int NULL, `registUserId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, `registUser` int UNSIGNED NOT NULL, `deleteFlg` bit NOT NULL, `organizationId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `maps` (`id` int NOT NULL AUTO_INCREMENT, `fasiciltyId` int NOT NULL, `name` varchar(64) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cost_map` (`mapId` int NOT NULL, `version` int NOT NULL, `pngPath` varchar(128) NOT NULL, `YAMLPath` varchar(128) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, PRIMARY KEY (`mapId`, `version`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `waypoint` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `xPoint` int NOT NULL, `yPoint` int NOT NULL, `zPoint` int NOT NULL, `map` int NULL, `registUserId` int NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `path` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `url` varchar(128) NOT NULL, `startPoint` int NOT NULL, `goalPoint` int NOT NULL, `startPointPos` int NOT NULL, `goalPointPos` int NOT NULL, `map` int NULL, `registUserId` int NULL, `ownerIdId` int NULL, `startPointId` int NULL, `goalPointId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `slam_map` (`mapId` int NOT NULL, `version` int NOT NULL, `pngPath` varchar(128) NOT NULL, `YAMLPath` varchar(128) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, PRIMARY KEY (`mapId`, `version`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `facility` ADD CONSTRAINT `FK_9812a45ef22f2bd42b09c93b455` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `facility` ADD CONSTRAINT `FK_2c89ee09fd887a5819b22f6b674` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_f3d6aea8fcca58182b2e80ce979` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `maps` ADD CONSTRAINT `FK_b9f1c4ac190508788d9541b87ad` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `maps` ADD CONSTRAINT `FK_5198aca6b75eb2fe3c077f067ee` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `cost_map` ADD CONSTRAINT `FK_ddf2dc2907bbb03c42a93c8f5d9` FOREIGN KEY (`mapId`) REFERENCES `maps`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `cost_map` ADD CONSTRAINT `FK_71095b055dceba363476b7ea3a0` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `waypoint` ADD CONSTRAINT `FK_e83b413abb2f23422e3bc08ec0d` FOREIGN KEY (`map`) REFERENCES `maps`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `waypoint` ADD CONSTRAINT `FK_ed95c119600eb6647b752ad7f00` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `waypoint` ADD CONSTRAINT `FK_9763cee269449cb943ae5ab7797` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_13519575d20fff520f352e7a35a` FOREIGN KEY (`map`) REFERENCES `maps`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_ed81ae2a02a2950a39701bcd6fb` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_181ef19118bc7046591500a9f01` FOREIGN KEY (`ownerIdId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_debfe960d242c73588e1b7e0b0c` FOREIGN KEY (`startPointId`) REFERENCES `waypoint`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_71c13f94bab37edb18af0ee65a6` FOREIGN KEY (`goalPointId`) REFERENCES `waypoint`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `slam_map` ADD CONSTRAINT `FK_7e7ee4a5cdf7a194bc39f63b7cf` FOREIGN KEY (`mapId`) REFERENCES `maps`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `slam_map` ADD CONSTRAINT `FK_a189137cb187d8c5cc08c00646f` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `slam_map` DROP FOREIGN KEY `FK_a189137cb187d8c5cc08c00646f`");
        await queryRunner.query("ALTER TABLE `slam_map` DROP FOREIGN KEY `FK_7e7ee4a5cdf7a194bc39f63b7cf`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_71c13f94bab37edb18af0ee65a6`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_debfe960d242c73588e1b7e0b0c`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_181ef19118bc7046591500a9f01`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_ed81ae2a02a2950a39701bcd6fb`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_13519575d20fff520f352e7a35a`");
        await queryRunner.query("ALTER TABLE `waypoint` DROP FOREIGN KEY `FK_9763cee269449cb943ae5ab7797`");
        await queryRunner.query("ALTER TABLE `waypoint` DROP FOREIGN KEY `FK_ed95c119600eb6647b752ad7f00`");
        await queryRunner.query("ALTER TABLE `waypoint` DROP FOREIGN KEY `FK_e83b413abb2f23422e3bc08ec0d`");
        await queryRunner.query("ALTER TABLE `cost_map` DROP FOREIGN KEY `FK_71095b055dceba363476b7ea3a0`");
        await queryRunner.query("ALTER TABLE `cost_map` DROP FOREIGN KEY `FK_ddf2dc2907bbb03c42a93c8f5d9`");
        await queryRunner.query("ALTER TABLE `maps` DROP FOREIGN KEY `FK_5198aca6b75eb2fe3c077f067ee`");
        await queryRunner.query("ALTER TABLE `maps` DROP FOREIGN KEY `FK_b9f1c4ac190508788d9541b87ad`");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_f3d6aea8fcca58182b2e80ce979`");
        await queryRunner.query("ALTER TABLE `facility` DROP FOREIGN KEY `FK_2c89ee09fd887a5819b22f6b674`");
        await queryRunner.query("ALTER TABLE `facility` DROP FOREIGN KEY `FK_9812a45ef22f2bd42b09c93b455`");
        await queryRunner.query("DROP TABLE `slam_map`");
        await queryRunner.query("DROP TABLE `path`");
        await queryRunner.query("DROP TABLE `waypoint`");
        await queryRunner.query("DROP TABLE `cost_map`");
        await queryRunner.query("DROP TABLE `maps`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `facility`");
        await queryRunner.query("DROP TABLE `organization`");
    }

}
