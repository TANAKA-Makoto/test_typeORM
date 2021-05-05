import {
        Entity, PrimaryGeneratedColumn, Column, BaseEntity,
        ManyToOne, OneToMany, JoinColumn
    } from "typeorm";

import {Organization} from "./organization";
import {Facility} from "./facility";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    @OneToMany(type => Facility, Facility => Facility['owner-id'])
    @OneToMany(type => Facility, Facility => Facility['regist-user-id'])
    readonly 'id': number;

    @Column({ type: 'datetime', nullable: false})
    readonly 'regist-date': string;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

    @Column({ type: 'int' ,nullable: false ,unsigned: true })
    readonly 'regist-user-id': number;


    @ManyToOne(type => Organization, {
    cascade: true
  })
   @JoinColumn()
   readonly 'organization-id':number;

    @Column({ type: 'bit',nullable: false})
    readonly 'delete-flg': number = 0;
}