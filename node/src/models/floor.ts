import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, JoinTable} from "typeorm";

import {MyBaseEntity} from "./MyBaseEntity";
import {Facility} from "./facility"
import {Map} from "./map"
/*


 */
@Entity('Floors')
export class Floor extends MyBaseEntity {
    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'int',nullable: false})
    'FloorNumber':number;

    @ManyToOne(() => Facility, facility => facility.id)
    'Facility':Facility;

    @OneToMany(type => Map, maps => Map['id'])
    'maps':Map;

    @Column()
    'traslation':any;
    @Column()
    'rotation':any;
    @Column({type:'text'})
    'Description':string;

}