import { Status } from "../interfaces/IAppointment"

interface IAppointmentDto {
    date: Date,
    time: string,
    userId: number,
    status: Status
}

export default IAppointmentDto