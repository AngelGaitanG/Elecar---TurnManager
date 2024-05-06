import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Crendential";
import { Appointment } from "./Appointment";


@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credentialsId: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.userId)
    appointments: Appointment[];
}