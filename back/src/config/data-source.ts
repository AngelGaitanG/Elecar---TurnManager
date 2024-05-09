import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Crendential";
import { Appointment } from "../entities/Appointment";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

const portNumber = DB_PORT ? parseInt(DB_PORT) : undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: portNumber,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment);