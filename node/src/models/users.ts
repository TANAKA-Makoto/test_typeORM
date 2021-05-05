import {
        Entity, PrimaryGeneratedColumn, Column, BaseEntity,
        ManyToOne, OneToMany, JoinColumn
    } from "typeorm";

import {Organization} from "./organization";
import {Facility} from "./facility";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    @OneToMany(type => Facility, Facility => Facility['owner'])
    @OneToMany(type => Facility, Facility => Facility['registUser'])
    readonly 'id': number;

    @Column({ type: 'datetime', nullable: false})
    readonly 'registDate': string;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name': string;

    @Column({ type: 'int' ,nullable: false ,unsigned: true })
    readonly 'registUser': number;


    @ManyToOne(type => Organization, {
    cascade: true
  })
   @JoinColumn()
   readonly 'organization':number;

    @Column({ type: 'bit',nullable: false})
    readonly 'deleteFlg': number = 0;
}