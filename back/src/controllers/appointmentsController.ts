import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentService";


export const getAppointments = async (req: Request, res: Response) => {
    const AllAppointments = await getAppointmentsService();
    res.status(200).json(AllAppointments);
}

export const oneAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = parseInt(id);
    const appointment = await getAppointmentByIdService(idNumber);
    res.status(200).send(appointment);
}

export const createAppointment = async (req: Request, res: Response) => {

    try {
        const appointment = req.body;
    const newApp = await createAppointmentService(appointment);
    res.status(201).json(newApp);
    } catch (error) {
        res.status(400).send("No se ingresaron los datos requeridos");
    }
    
}

export const cancelAppointment = async (req: Request, res: Response) => {
    const appoitCancel = parseInt(req.body.id);
    const cancel = await cancelAppointmentService(appoitCancel);
    res.status(200).json(cancel);
}