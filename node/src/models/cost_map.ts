import {
        Entity, PrimaryGeneratedColumn, PrimaryColumn, Column,
        BaseEntity, ManyToOne, JoinColumn
    } from "typeorm";

import {Users} from "./users";
import {Maps} from "./maps";


@Entity()
export class Cost_map extends BaseEntity {

    @PrimaryColumn()
    @ManyToOne(()=>Maps)
    readonly 'map-id': number;

    @PrimaryGeneratedColumn()
    'version':number

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'png_path': string;

    @Column({ type: 'varchar', length: 128 ,nullable: false})
    'YAML_path': string;

    @Column({ type: 'datetime', nullable: false})
    readonly 'regist-date': string;

    @ManyToOne(type=>Users, {
        cascade: true
    })
    @JoinColumn()
    readonly 'regist-user-id':number;

    @Column(({ type: 'bit',nullable: false}))
    'delete-flg':boolean = false

}