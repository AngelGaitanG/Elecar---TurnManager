import { CredentialModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import { Credential } from "../entities/Crendential";
import { getUserByIdService } from "./usersService";



export const createCredential = async (username: string, password: string) => {
    let newCredential: ICredentialDto =  {  
        username,
        password
    }
    
    const existingCredential = await CredentialModel.findOne({ where: { username }});
    if (existingCredential) {
        throw new Error('El username ya existe');
    }

    const credentials: Credential = await CredentialModel.create(newCredential);
    const credentialResult = await CredentialModel.save(credentials);


    return credentialResult;
}

export const loginCredential = async (username: string, password: string) => {
    const credential: Credential | null = await CredentialModel.findOne({
         where: {
             username: username,
             password: password
         }
     });

     
     if (credential === null) {
         throw new Error('Credenciales inválidas');
        }
        if(credential) {
           const user = await getUserByIdService(credential.id)
           if (user) {
            const userLogged = {
                
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    birthdate: user.birthdate,
                    nDni: user.nDni
                }
            }
            return {login: true, user: user}	
        }
    }
}