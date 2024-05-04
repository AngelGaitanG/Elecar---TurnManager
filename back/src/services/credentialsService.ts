import ICredential from "../interfaces/ICredential"
let credentials: ICredential[] = []
let id = 1;
export const createCredential = async (username: string, password: string): Promise<number> => {
    let newCredential: ICredential = {
        id: id,
        username,
        password
    }
    id++

    if (credentials.find((credential) => credential.username === username)) {
        throw new Error('El username ya existe');
    } else {
        credentials.push(newCredential)
    }
    
    return newCredential.id;
}

export const loginCredential = async (username: string, password: string): Promise<number> => {
   const user = credentials.find((crendetial) => {
        if (crendetial.username === username && crendetial.password === password) {
            return crendetial.id
        };
    });
    if (user === undefined) {
        throw new Error('Credenciales invalidas');
    }
    return user.id;
}