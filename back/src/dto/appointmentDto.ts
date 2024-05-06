import { Status } from "../interfaces/IAppointment"

interface IAppointmentDto {
    date: string,
    time: string,
    userId: number,
    status: Status
}

export default IAppointmentDto