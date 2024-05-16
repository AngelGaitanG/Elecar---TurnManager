import { Request, Response } from "express"
import { createUserService, getUserByIdService, getUsersService } from "../services/usersService"
import IUser from "../interfaces/IUser"
import { loginCredential } from "../services/credentialsService"
import { User } from "../entities/User"


export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersService()
    
    res.status(200).json(users)
}

export const getUserbyId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const userId = parseInt(id)
        const user = await getUserByIdService(userId)
        
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send("No se encontro el usuario")
    }
}

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, birthdate, nDni, username, password} = req.body
        const user = {name, email, birthdate, nDni};
        const credentials = {username, password};
         await createUserService(credentials, user)
        res.status(201).json({"message": "Usuario registrado exitosamente"})
    } catch (error) {
        res.status(400).send("Error al registrar el usuario")
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try{
    const {username, password} = req.body;
    const info = await loginCredential(username, password)
    
    res.status(200).json(info);}
    catch(error){
        res.status(400).send("Credenciales invalidas");
    }
}