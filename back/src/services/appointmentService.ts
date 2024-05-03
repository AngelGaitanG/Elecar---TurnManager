import IAppointment from "../interfaces/IAppointment"

let appointments: IAppointment[] = []
let id = 1;

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

export const createAppointmentService = async (appointment: IAppointment): Promise<void> => {
    const newAppointment: IAppointment = {
        id: id,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointment.status
    }

    if(!appointment.userId){
        throw new Error('Falta userID');
    }

    id++;
    appointments.push(newAppointment)
}

export const cancelAppointmentService = async (id: number): Promise<void> => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    if(!appointment){
        throw new Error('El turno no existe');
    }
    appointment.status = "cancelled"
}