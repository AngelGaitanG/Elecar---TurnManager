import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Crendential";
import { Appointment } from "./Appointment";
import path from "path";


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

    @Column({default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"})
    imageUrl: string
}
