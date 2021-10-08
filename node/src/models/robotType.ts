import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {MyBaseEntity} from "./MyBaseEntity";

@Entity()
export class RobotType extends BaseEntity{

    @PrimaryGeneratedColumn()
    'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'type': string;

}