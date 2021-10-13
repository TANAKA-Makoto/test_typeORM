import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable} from "typeorm";

import {MyBaseEntity} from "./MyBaseEntity";
import {RobotType} from "./robotType";
/*


 */
@Entity()
export class RobotSpec extends MyBaseEntity {
    @PrimaryGeneratedColumn()
    readonly 'id': number;

    @Column({ type: 'varchar', length: 64 ,nullable: false})
    'name':string;

    @ManyToMany(() => RobotType)
    @JoinTable()
    'types':RobotType[];/*固定値でelevator*/

    'stopPoint':Waypoint[];

    @Column({type:'text'})
    'Description':string;

}