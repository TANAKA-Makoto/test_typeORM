import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./users";


@Entity()
export class Maps extends BaseEntity {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({nullable: false})
    'fasicilty-id':number

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    name: string;

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

}