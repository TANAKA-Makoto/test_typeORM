import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable} from "typeorm";

import {MyBaseEntity} from "./MyBaseEntity";
import {RobotType} from "./robotType";
/*
Name

型式

Type

ロボットの種類
リストから選択する
複数選択可能

・自律移動 2輪
・自律移動 4輪
・エレベータ

Radius[m]

ロボットの大きさ（半径）

Max Speed[m/s]

最大速度

Max Acceleration[m/s^2]

最大加速度

Max Angular Speed[rad/s]

最大角速度

Description

概要


 */
@Entity()
export class NavigationSpec extends MyBaseEntity {
    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name':string;

	@Column({type: 'float', nullable:false})
    'MaxSpeed':number;

	@Column({type: 'float', nullable:false})
    'MaxAcceleration':number;

	@Column({type: 'float', nullable:false})
    'MaxAngularSpeed':number;

    @Column({type:'text'})
    'Description':string;

    @ManyToMany(() => RobotType)
    @JoinTable()
    'types': RobotType[];/*固定値でnavigation*/

}