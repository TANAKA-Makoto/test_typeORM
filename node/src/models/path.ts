import {
        Entity, PrimaryGeneratedColumn, Check, Column,
        BaseEntity, ManyToOne, OneToOne, JoinColumn
    } from "typeorm";

import {Users} from "./users";
import {Maps} from "./maps";
import {Waypoint} from "./waypoint";


@Entity()
@Check('(`startPointId` IS NOT NULL) OR (`startPointPos` IS NOT NULL)')
@Check('(`goalPointId` IS NOT NULL) OR (`goalPointPos` IS NOT NULL)')
export class Path extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly 'id': string;

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

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'url':string
    //これなんのためだっけ？

    @Column({type:'int'})
    @ManyToOne(()=>Waypoint)
    @JoinColumn()
    'startPoint':Waypoint["id"]

    @Column({type:'int'})
    @ManyToOne(()=>Waypoint)
    @JoinColumn()
    'goalPoint':Waypoint["id"]

    @Column({type:'int'})
    'startPointPos':number

    @Column({type:'int'})
    'goalPointPos':number
}