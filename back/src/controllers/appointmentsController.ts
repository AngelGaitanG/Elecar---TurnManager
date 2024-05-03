import { Request, Response } from "express";
import { getAppointmentByIdService, getAppointmentsService } from "../services/appointmentService";


export const getAppointments = async (req: Request, res: Response) => {
    const AllAppointments = await getAppointmentsService();
    res.status(200).json(AllAppointments);
}

export const oneAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = parseInt(id);
    const appointment = await getAppointmentByIdService(idNumber);
    res.status(200).send("Obtener el detalle de un turno específico");
}

export const createAppointment = async (req: Request, res: Response) => {
    res.status(201).send("Agendar un nuevo turno");
}

export const cancelAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Cambiar el estatus de un turno a “cancelled”");
}