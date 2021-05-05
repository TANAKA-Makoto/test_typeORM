import {
        Entity, PrimaryGeneratedColumn, Check, Column,
        BaseEntity, ManyToOne, OneToOne, JoinColumn
    } from "typeorm";

import {Users} from "./users";
import {Maps} from "./maps";
import {Waypoint} from "./waypoint";


@Entity()
@Check('(`start-point-id` IS NOT NULL) OR (`start-point` IS NOT NULL)')
@Check('(`goal-point-id` IS NOT NULL) OR (`goal-point` IS NOT NULL)')
export class Path extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

    @ManyToOne(()=>Maps)
    @JoinColumn({
        name: "cat_id",
        referencedColumnName: "name"
    })
    readonly 'map-id': number;


    @Column({ type: 'datetime', nullable: false})
    readonly 'regist-date': string;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'regist-user-id':number;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'owner-id':number;

    @Column(({ type: 'bit',nullable: false}))
    'delete-flg':boolean = false

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'url':string
    //これなんのためだっけ？

    @Column({type:'int'})
    @ManyToOne(()=>Waypoint)
    @JoinColumn()
    'start-point-id':Waypoint["id"]

    @Column({type:'int'})
    @ManyToOne(()=>Waypoint)
    @JoinColumn()
    'goal-point-id':Waypoint["id"]

    @Column({type:'int'})
    'start-point':number

    @Column({type:'int'})
    'goal-point':number
}