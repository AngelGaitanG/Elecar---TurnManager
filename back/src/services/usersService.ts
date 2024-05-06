import { UserModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import IUserDto from "../dto/userDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser"
import { createCredential } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    const users: User[] = await UserModel.find(
        {
            relations: {
                credentialsId: true,
                appointments: true
            }
            }
    );
    return users
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const userById = await UserModel.findOne({ where: { id },
        relations: {
            credentialsId: true,
            appointments: true
        }});
    if (!userById) {
        throw new Error('El usuario no existe');
    }
    return userById;
}

export const createUserService = async (credentials: ICredentialDto, userData: IUserDto):Promise<User> => {
    
    if(!credentials){
        throw new Error('Faltan credenciales');
    }
    const {username, password} = credentials;

    const credential = await createCredential(username, password);
    const {name, email, birthdate, nDni} = userData;

    const newUser = {
        name,
        email,
        birthdate,
        nDni,
        credentialsId: credential
    }
    const user: User =  await UserModel.create(newUser);
    const results = await UserModel.save(user);

    return results;
}