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
// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
export const createAppointmentService = async (appointment: IAppointment, userId: number): Promise<void> => {
    const newAppointment: IAppointment = {
        id: id,
        date: appointment.date,
        time: appointment.time,
        userId: userId,
        status: appointment.status
    }
    appointments.push(newAppointment)
}

export const cancelAppointmentService = async (id: number): Promise<void> => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    if(!appointment){
        throw new Error('El turno no existe');
    }
    appointment.status = "cancelled"
}