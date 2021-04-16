import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./users";


@Entity()
export class Facility extends BaseEntity {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: 'datetime', nullable: false})
    readonly 'regist-date': string;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    name: string;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'owner-id':number;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'regist-user-id':number;

}