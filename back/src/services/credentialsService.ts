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
    credentials.push(newCredential)
    return newCredential.id;
}

export const loginCredential = async (username: string, password: string): Promise<number> => {
   const idUser = credentials.find((crendetial) => {
        if (crendetial.username === username && crendetial.password === password) {
            return crendetial.id
        };
    });
    if (idUser === undefined) {
        throw new Error('Credenciales invalidas');
    }
    return idUser.id;
}