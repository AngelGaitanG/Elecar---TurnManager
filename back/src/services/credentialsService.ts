import { CredentialModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import { Credential } from "../entities/Crendential";



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

export const loginCredential = async (username: string, password: string): Promise<ICredentialDto> => {
    const user: Credential | null = await CredentialModel.findOne({
         where: {
             username: username,
             password: password
         }
     });
     if (user === null) {
         throw new Error('Credenciales inválidas');
     }
     const usuarioFinal = {
         username: user.username,
         password: user.password
     }
     return usuarioFinal;
 }