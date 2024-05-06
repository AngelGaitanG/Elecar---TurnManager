import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({
    name: "appointments"
})

export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    @ManyToOne(() => User, (user) => user.appointments)
    userId: number;

    @Column()
    status: string
}