import {
        Entity, PrimaryGeneratedColumn, PrimaryColumn, Column,
        BaseEntity, ManyToOne, JoinColumn
    } from "typeorm";

import {Users} from "./users";
import {Maps} from "./maps";


@Entity()
export class Waypoint extends BaseEntity {

    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

    @ManyToOne(()=>Maps)
    @JoinColumn({
        name: "map",
        referencedColumnName: "id"
    })
    readonly 'map': number;


    @Column({ type: 'datetime', nullable: false})
    readonly 'registDate': string;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'registUser':number;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'owner':number;

    @Column(({ type: 'bit',nullable: false}))
    'deleteFlg':boolean = false

    @Column({type:'int', nullable: false})
    'xPoint':number;
    @Column({type:'int', nullable: false})
    'yPoint':number;
    @Column({type:'int', nullable: false, })
    'zPoint':number = 0;

}