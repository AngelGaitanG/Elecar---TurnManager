import { Request, Response } from "express"


export const getUsers = async (req: Request, res: Response) => {
    res.status(200).send("Obtener el listado de todos los usuarios")
}

export const getUserbyId = async (req: Request, res: Response) => {
    res.status(200).send("Obtener el detalle de un usuario específico")
}

export const registerUser = async (req: Request, res: Response) => {
    res.status(201).send("Registro de un nuevo usuario")
}

export const loginUser = async (req: Request, res: Response) => {
    res.status(200).send("Login del usuario a la aplicación")
}