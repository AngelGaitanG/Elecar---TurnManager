import { UserModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import IUserDto from "../dto/userDto";
import { User } from "../entities/User";

import { createCredential } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    const users: User[] = await UserModel.find(
        {
            relations: {
                appointments: true
            }
            }
    );
    return users
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const userById = await UserModel.findOne({ where: { id },
        relations: {
            appointments: true
        }});
    if (!userById) {
        throw new Error('El usuario no existe');
    }
    
    return userById;
}

export const createUserService = async (credentials: ICredentialDto, userData: IUserDto):Promise<void> => {
    
    if(!credentials){
        throw new Error('Faltan credenciales');
    }
    const {username, password} = credentials;

    const credential = await createCredential(username, password);
    const {name, email, birthdate, nDni} = userData;

    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('El email ya está registrado');
    }
    const existingDni = await UserModel.findOne({ where: { nDni } });
    if(existingDni) {
        throw new Error('El dni ya existe');
    }

    const newUser = {
        name,
        email,
        birthdate,
        nDni,
        credentialsId: credential
    }
    const user: User =  await UserModel.create(newUser);
     await UserModel.save(user);

;
}

export const updateProfilePhoto = async (id: number, imageUrl: string): Promise<User | undefined> => {
    try {
        const user = await UserModel.findOne({ where: { id } });
        if (user) {
            user.imageUrl = `http://localhost:3000/images/${imageUrl}`; 
            await UserModel.save(user);
            return user;
        }
        return undefined; 
    } catch (error) {
        console.error("Error al actualizar la foto de perfil:", error);
        return undefined;
    }}