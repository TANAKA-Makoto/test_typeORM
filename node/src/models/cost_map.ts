import {
        Entity, PrimaryGeneratedColumn, PrimaryColumn, Column,
        BaseEntity, ManyToOne, JoinColumn
    } from "typeorm";

import {Users} from "./users";
import {Maps} from "./maps";


@Entity()
export class Cost_map extends BaseEntity {

    @PrimaryColumn()
    readonly 'mapId': number;

    @ManyToOne(()=>Maps)
    @JoinColumn()
    readonly 'map': Maps;

    @PrimaryColumn()
    'version':number

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'pngPath': string;

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'YAMLPath': string;

    @Column({ type: 'datetime', nullable: false})
    readonly 'registDate': string;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'registUser':number;

    @Column(({ type: 'bit',nullable: false}))
    'deleteFlg':boolean = false

}