import ICredentialDto from "../dto/credentialDto";
import IUserDto from "../dto/userDto";
import IUser from "../interfaces/IUser"
import { createCredential } from "./credentialsService";

let users: IUser[] = [
    {
        id: 0,
        name: "admin",
        email: "admin",
        birthdate: new Date("2022-04-01"),
        nDni: 0,
        credentialsId: 0
    }
];
let id: number = 0;

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
    
    if(!credentials){
        throw new Error('Faltan credenciales');
    }
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

    if(users.find((user) => user.name === name)){
        throw new Error('El nombre usuario ya existe');
    } else if(users.find((user) => user.email === email)){
        throw new Error('El email ya existe');
    } else if(users.find((user) => user.nDni === nDni)){
        throw new Error('El dni ya existe');
    } else {
        users.push(newUser);
    }

    return newUser;
}