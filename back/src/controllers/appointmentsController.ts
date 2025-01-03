import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";


export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).send("No se encontro ningun turno")
    }
}

export const oneAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
    const idNumber = parseInt(id);
    const appointment = await getAppointmentByIdService(idNumber);
    
    res.status(200).send(appointment);
    } catch (error) {
    res.status(404).send("No se encontro el turno")
    }
}

export const createAppointment = async (req: Request, res: Response) => {

    try {

        let {service, date, time, userId } = req.body;   

        const newApp = await createAppointmentService({id: 1, service, date, time, userId, status: "active"});

        res.status(201).json(newApp);

    } catch (error) {

        res.status(400).send(error);

    }
    
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber = parseInt(id);
    const cancel = await cancelAppointmentService(idNumber);
    res.status(200).json(cancel);
    } catch (error) {
        res.status(404).send("Turno no encontrado")
    }
}