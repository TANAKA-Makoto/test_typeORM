import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./users";


@Entity()
export class Maps extends BaseEntity {

    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({nullable: false})
    'fasiciltyId':number

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

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

}