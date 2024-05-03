import ICredentialDto from "../dto/credentialDto";
import IUserDto from "../dto/userDto";
import IUser from "../interfaces/IUser"
import { createCredential } from "./credentialsService";

let users: IUser[] = [];
let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
    return users
}

export const getUserByIdService = async (id: number): Promise<IUser> => {
    const userById = users.find((user) => user.id === id);
    if(!userById){
        throw new Error('El usuario no existe');
    }
    return userById;
}

export const createUserService = async (credentials: ICredentialDto, user: IUserDto) => {
    
    const {username, password} = credentials;

    const credential = await createCredential(username, password);
    const {name, email, birthdate, nDni} = user;

    const newUser: IUser = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId: credential
    }
    id++;
    users.push(newUser);
    return newUser;
}