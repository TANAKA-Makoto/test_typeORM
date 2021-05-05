import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";

import {Users} from "./users";

@Entity()
export class Organization extends BaseEntity {

    @PrimaryGeneratedColumn()
    @OneToMany(type => Users, Users => Users['organization'])
    readonly 'id': number;

    @Column({ type: 'datetime', nullable: false})
    readonly 'registDate': string;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

}