import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFirst1633667554554 implements MigrationInterface {
    name = 'CreateFirst1633667554554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `organization` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `facility` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, `ownerId` int NULL, `registUserId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `registDate` datetime NOT NULL, `name` varchar(64) NOT NULL, `registUser` int UNSIGNED NOT NULL, `deleteFlg` bit NOT NULL, `organizationId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `maps` (`id` int NOT NULL AUTO_INCREMENT, `fasiciltyId` int NOT NULL, `floor` int NOT NULL, `name` varchar(64) NOT NULL, `imagePath` varchar(128) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `cost_map` (`mapId` int NOT NULL, `version` int NOT NULL, `pngPath` varchar(128) NOT NULL, `YAMLPath` varchar(128) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, PRIMARY KEY (`mapId`, `version`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `waypoint` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `xPoint` int NOT NULL, `yPoint` int NOT NULL, `zPoint` int NOT NULL, `map` int NULL, `registUserId` int NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `path` (`id` varchar(36) NOT NULL, `name` varchar(64) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `url` varchar(128) NOT NULL, `startPoint` int NOT NULL, `goalPoint` int NOT NULL, `startPointPos` int NOT NULL, `goalPointPos` int NOT NULL, `map` int NULL, `registUserId` int NULL, `ownerId` int NULL, `startPointId` int NULL, `goalPointId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `robot` (`registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `id` int NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `home` varchar(128) NOT NULL, `MQTT` tinyint NOT NULL, `registUserId` int NULL, `ownerId` int NULL, `facilityId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `robot_type` (`id` int NOT NULL AUTO_INCREMENT, `type` varchar(64) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `robot_spec` (`registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `id` int NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `MaxSpeed` float NOT NULL, `MaxAcceleration` float NOT NULL, `MaxAngularSpeed` float NOT NULL, `registUserId` int NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `slam_map` (`mapId` int NOT NULL, `version` int NOT NULL, `pngPath` varchar(128) NOT NULL, `YAMLPath` varchar(128) NOT NULL, `registDate` datetime NOT NULL, `deleteFlg` bit NOT NULL, `registUserId` int NULL, PRIMARY KEY (`mapId`, `version`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `robot_spec_types_robot_type` (`robotSpecId` int NOT NULL, `robotTypeId` int NOT NULL, INDEX `IDX_6985182719424c5526a3528d13` (`robotSpecId`), INDEX `IDX_8ca334c7f9b0851cbce00d902c` (`robotTypeId`), PRIMARY KEY (`robotSpecId`, `robotTypeId`)) ENGINE=InnoDB");
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
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_53d1398ab736669870754645275` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_debfe960d242c73588e1b7e0b0c` FOREIGN KEY (`startPointId`) REFERENCES `waypoint`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_71c13f94bab37edb18af0ee65a6` FOREIGN KEY (`goalPointId`) REFERENCES `waypoint`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot` ADD CONSTRAINT `FK_03014249e664cd7bf0dc8e7bed5` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot` ADD CONSTRAINT `FK_43188ec7e7ed4d614d53b798db3` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot` ADD CONSTRAINT `FK_aadd313d56508cf90ada75eec42` FOREIGN KEY (`facilityId`) REFERENCES `facility`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot_spec` ADD CONSTRAINT `FK_5136849bc0e017c4eadd94a3693` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot_spec` ADD CONSTRAINT `FK_0af83a8de47fb670d7145691240` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `slam_map` ADD CONSTRAINT `FK_7e7ee4a5cdf7a194bc39f63b7cf` FOREIGN KEY (`mapId`) REFERENCES `maps`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `slam_map` ADD CONSTRAINT `FK_a189137cb187d8c5cc08c00646f` FOREIGN KEY (`registUserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot_spec_types_robot_type` ADD CONSTRAINT `FK_6985182719424c5526a3528d136` FOREIGN KEY (`robotSpecId`) REFERENCES `robot_spec`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `robot_spec_types_robot_type` ADD CONSTRAINT `FK_8ca334c7f9b0851cbce00d902c4` FOREIGN KEY (`robotTypeId`) REFERENCES `robot_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `robot_spec_types_robot_type` DROP FOREIGN KEY `FK_8ca334c7f9b0851cbce00d902c4`");
        await queryRunner.query("ALTER TABLE `robot_spec_types_robot_type` DROP FOREIGN KEY `FK_6985182719424c5526a3528d136`");
        await queryRunner.query("ALTER TABLE `slam_map` DROP FOREIGN KEY `FK_a189137cb187d8c5cc08c00646f`");
        await queryRunner.query("ALTER TABLE `slam_map` DROP FOREIGN KEY `FK_7e7ee4a5cdf7a194bc39f63b7cf`");
        await queryRunner.query("ALTER TABLE `robot_spec` DROP FOREIGN KEY `FK_0af83a8de47fb670d7145691240`");
        await queryRunner.query("ALTER TABLE `robot_spec` DROP FOREIGN KEY `FK_5136849bc0e017c4eadd94a3693`");
        await queryRunner.query("ALTER TABLE `robot` DROP FOREIGN KEY `FK_aadd313d56508cf90ada75eec42`");
        await queryRunner.query("ALTER TABLE `robot` DROP FOREIGN KEY `FK_43188ec7e7ed4d614d53b798db3`");
        await queryRunner.query("ALTER TABLE `robot` DROP FOREIGN KEY `FK_03014249e664cd7bf0dc8e7bed5`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_71c13f94bab37edb18af0ee65a6`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_debfe960d242c73588e1b7e0b0c`");
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_53d1398ab736669870754645275`");
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
        await queryRunner.query("DROP INDEX `IDX_8ca334c7f9b0851cbce00d902c` ON `robot_spec_types_robot_type`");
        await queryRunner.query("DROP INDEX `IDX_6985182719424c5526a3528d13` ON `robot_spec_types_robot_type`");
        await queryRunner.query("DROP TABLE `robot_spec_types_robot_type`");
        await queryRunner.query("DROP TABLE `slam_map`");
        await queryRunner.query("DROP TABLE `robot_spec`");
        await queryRunner.query("DROP TABLE `robot_type`");
        await queryRunner.query("DROP TABLE `robot`");
        await queryRunner.query("DROP TABLE `path`");
        await queryRunner.query("DROP TABLE `waypoint`");
        await queryRunner.query("DROP TABLE `cost_map`");
        await queryRunner.query("DROP TABLE `maps`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `facility`");
        await queryRunner.query("DROP TABLE `organization`");
    }

}
