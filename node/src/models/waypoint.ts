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

    @Column({type:'int', nullable: false})
    'x-point':number;
    @Column({type:'int', nullable: false})
    'y-point':number;
    @Column({type:'int', nullable: false, })
    'z-point':number = 0;

}