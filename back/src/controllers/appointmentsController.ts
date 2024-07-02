import { Request, Response } from "express";


export const getAppointments = async (req: Request, res: Response) => {
    res.status(200).send("Obtener el listado de todos los turnos de todos los usuarios");
}

export const oneAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Obtener el detalle de un turno específico");
}

export const createAppointment = async (req: Request, res: Response) => {
    res.status(201).send("Agendar un nuevo turno");
}

export const cancelAppointment = async (req: Request, res: Response) => {
    res.status(200).send("Cambiar el estatus de un turno a “cancelled”");
}