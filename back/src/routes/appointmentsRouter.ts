
import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointments, oneAppointment } from "../controllers/appointmentsController";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);

appointmentRouter.get("/:id", oneAppointment);

appointmentRouter.post("/schedule", createAppointment);

appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter;