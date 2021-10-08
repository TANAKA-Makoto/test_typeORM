import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {MyBaseEntity} from "./MyBaseEntity";

import {Facility} from "./facility"
/*
Facility

初期ファシリティ

Home

初期位置
{x:0.0, y:0.0, z:0.0, floor:1}の形式

Model

ロボットのモデルID

MQTT
 */
@Entity()
export class Robot extends MyBaseEntity {

    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name':string;

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'home':string;

    @Column({type:'boolean'})
    'MQTT':boolean

    @ManyToOne(() => Facility, facility => facility.id)
    'facility': Facility;


}