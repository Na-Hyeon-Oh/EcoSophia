import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { History } from "./history.entity";

@Entity()
export class Method {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.methods)
    user: User

    @Column()
    type: string

    @Column()
    name: string

    @OneToMany(() => History, (history) => history.method)
    histories: History[]
}