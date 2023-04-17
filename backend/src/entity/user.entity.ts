import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Method } from './method.entity';
import { History } from './history.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    pw: string

    @OneToMany(() => Method, (method) => method.user)
    methods: Method[]

    @OneToMany(() => History, (history) => history.user)
    histories: History[]

}