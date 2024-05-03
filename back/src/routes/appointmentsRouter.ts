
import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointments, oneAppointment } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);

appointmentRouter.get("/appointment", oneAppointment);

appointmentRouter.post("/appointment/schedule", createAppointment);

appointmentRouter.put("/appointment/cancel/:id", cancelAppointment);

export default appointmentRouter;