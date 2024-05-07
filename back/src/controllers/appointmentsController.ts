import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";


export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        const formattedAppointments = appointments.map(appointment => ({
            ...appointment,
            date: new Date(appointment.date).toISOString().split('T')[0]
        }));
        res.status(200).json(formattedAppointments);
    } catch (error) {
        res.status(404).send("No se encontro ningun turno")
    }
}

export const oneAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
    const idNumber = parseInt(id);
    const appointment = await getAppointmentByIdService(idNumber);
    let formattedAppointment = {};
    if(appointment) {
        formattedAppointment = {
            ...appointment,
            date: new Date(appointment.date).toISOString().split('T')[0]
        };
    };
    res.status(200).send(formattedAppointment);
    } catch (error) {
    res.status(404).send("No se encontro el turno")
    }
}

export const createAppointment = async (req: Request, res: Response) => {

    try {

        let {date, time, userId, status } = req.body;   

        const newApp:Appointment = await createAppointmentService({date, time, userId, status});

        res.status(201).json(newApp);

    } catch (error) {

        console.log(error)

        res.status(400).send(error);

    }
    
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appoitCancel = parseInt(req.body.id);
    const cancel = await cancelAppointmentService(appoitCancel);
    res.status(200).json(cancel);
    } catch (error) {
        res.status(404).send("Turno no encontrado")
    }
}