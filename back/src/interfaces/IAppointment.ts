enum Status {
    CANCELLED = "cancelled",
    ACTIVE = "active",
}

interface IAppointment {
    id: number,
    date: Date,
    time: string,
    userId: number,
    status: Status
}

export { IAppointment, Status }