import IAppointmentDto from "../dto/appointmentDto";
import { IAppointment, Status } from "../interfaces/IAppointment"

let appointments: IAppointment[] = [
    {
        id: 0,
        date: new Date("2022-04-01"),
        time: "10:00",
        userId: 0,
        status: Status.ACTIVE
    }
]
let appointmentID = 0;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments
}

export const getAppointmentByIdService = async (id: number): Promise<IAppointment> => {
    const appointment = appointments.find((appointment) => appointment.id === id);

    if(!appointment){
        throw new Error('El turno no existe');
    }
    return appointment
}

export const createAppointmentService = async (appointment: IAppointmentDto): Promise<void> => {
    const newAppointment: IAppointment = {
        id: appointmentID,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointment.status
    }

    if(!appointment.userId){
        throw new Error('Falta userID');
    }

    appointmentID++;
    appointments.push(newAppointment)
}

export const cancelAppointmentService = async (id: number): Promise<void> => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    if(!appointment){
        throw new Error('El turno no existe');
    }
    appointment.status = Status.CANCELLED;
}