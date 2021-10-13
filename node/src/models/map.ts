import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";

import {Users} from "./users";


@Entity('Maps')
export class Map extends BaseEntity {

    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({nullable: false})
    'fasiciltyId':number

    @Column({nullable:false})
    'floor':number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

    @Column({ type: 'varchar', length: 128, nullable: false})
    'imagePath':string;

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