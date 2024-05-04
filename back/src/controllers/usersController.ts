import { Request, Response } from "express"
import { createUserService, getUserByIdService, getUsersService } from "../services/usersService"
import IUser from "../interfaces/IUser"
import { loginCredential } from "../services/credentialsService"


export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersService()
    res.status(200).json(users)
}

export const getUserbyId = async (req: Request, res: Response) => {
    const { id } = req.params
    const userId = parseInt(id)
    const user = await getUserByIdService(userId)
    res.status(200).json(user)
}

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const array = req.body
        const user = array[0];
        const credentials = array[1];
        const newUser :IUser = await createUserService(credentials, user)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).send("Error al registrar el usuario")
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try{
    const {username, password} = req.body;
    const id = await loginCredential(username, password)

    let info = 
        {message: `Login exitoso, id del usuario ${id}`}
    
    res.status(200).json(info);}
    catch(error){
        res.status(400).send("Credenciales invalidas");
    }
}