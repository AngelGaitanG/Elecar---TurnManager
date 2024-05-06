import { CredentialModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import { Credential } from "../entities/Crendential";



export const createCredential = async (username: string, password: string) => {
    let newCredential: ICredentialDto =  {  
        username,
        password
    }
    
    const credentials: Credential = await CredentialModel.create(newCredential);
    const credentialResult = await CredentialModel.save(credentials);

    // if (credentials.find((credential) => credential.username === username)) {
    //     throw new Error('El username ya existe');
    // } else {
    //     credentials.push(newCredential)
    // }
    
    return credentialResult;
}

export const loginCredential = async (username: string, password: string): Promise<number> => {
    const user: Credential | null = await CredentialModel.findOne({
         where: {
             username: username,
             password: password
         }
     });
     if (user === null) {
         throw new Error('Credenciales inválidas');
     }
     return user.id;
 }