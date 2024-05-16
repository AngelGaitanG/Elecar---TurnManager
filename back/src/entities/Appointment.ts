import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import Service from "../interfaces/IService";


@Entity({
    name: "appointments"
})

export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    service: Service

    @Column()
    date: Date

    @Column()
    time: string

    @ManyToOne(() => User, (user) => user.appointments)
    userId: User;

    @Column({default: "active"})
    status: string
}