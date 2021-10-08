import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./users";

export class MyBaseEntity extends BaseEntity {
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