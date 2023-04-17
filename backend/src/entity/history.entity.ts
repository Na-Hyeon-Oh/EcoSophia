import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Method } from './method.entity';

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.histories)
    user: User

    @Column({ type: "date"})
    date: Date

    @ManyToOne(() => Method, (method) => method.histories)
    method: Method

    @Column()
    content: string

    @Column()
    cost: number

    @Column({ type: "json"})
    tags: string[]

}