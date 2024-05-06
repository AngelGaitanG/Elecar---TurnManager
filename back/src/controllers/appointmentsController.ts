import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";


export const getAppointments = async (req: Request, res: Response) => {
    const appointments = await getAppointmentsService();
    // const reAppoitnments = appointments.map((appointment) => {
    //     return {
    //         ...appointment,
    //         date: appointment.date.toLocaleDateString(),
    //     }
    // })
    res.status(200).json(appointments);
}

export const oneAppointment = async (req: Request, res: Response) => {
    const { id } = req.body;
    const idNumber = parseInt(id);
    const appointment = await getAppointmentByIdService(idNumber);
    res.status(200).send(appointment);
}

export const createAppointment = async (req: Request, res: Response) => {

    try {
        const appointment = req.body;
    const newApp: Appointment = await createAppointmentService(appointment);
    res.status(201).json(newApp);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
    
}

export const cancelAppointment = async (req: Request, res: Response) => {
    const appoitCancel = parseInt(req.body.id);
    const cancel = await cancelAppointmentService(appoitCancel);
    res.status(200).json(cancel);
}