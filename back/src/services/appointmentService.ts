import { AppointmentModel } from "../config/data-source";
import IAppointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { Status } from "../interfaces/IAppointment"


export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find();
    return appointments
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const appointment = AppointmentModel.findOne({ where: { id } });

    if(!appointment){
        throw new Error('El turno no existe');
    }
    return appointment
}

export const createAppointmentService = async (appointment: IAppointmentDto): Promise<Appointment> => {
    const { date, time, userId, status } = appointment;

    const objectAppointment = {
        date: date,
        time: time,
        userId: userId,
        status: status
    };

    if (!appointment.userId) {
        throw new Error('Falta userID');
    }

    const newAppointment = await AppointmentModel.create(objectAppointment);
    const results = await AppointmentModel.save(newAppointment);
    return results;
}

export const cancelAppointmentService = async (id: number): Promise<string> => {
    const appointment = await AppointmentModel.findOne({ where: { id } });
    if(!appointment){
        throw new Error('El turno no existe');
    }
    appointment.status = Status.CANCELLED;
    await AppointmentModel.save(appointment);
    return "Turno cancelado"
}