import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSecond1620237924859 implements MigrationInterface {
    name = 'CreateSecond1620237924859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_181ef19118bc7046591500a9f01`");
        await queryRunner.query("ALTER TABLE `path` CHANGE `ownerIdId` `ownerId` int NULL");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_53d1398ab736669870754645275` FOREIGN KEY (`ownerId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `path` DROP FOREIGN KEY `FK_53d1398ab736669870754645275`");
        await queryRunner.query("ALTER TABLE `path` CHANGE `ownerId` `ownerIdId` int NULL");
        await queryRunner.query("ALTER TABLE `path` ADD CONSTRAINT `FK_181ef19118bc7046591500a9f01` FOREIGN KEY (`ownerIdId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
