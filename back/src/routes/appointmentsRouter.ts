// GET /appointments
// GET /appointments/:id

import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointments, oneAppointment } from "../controllers/appointmentsController";

// POST /appointments/schedule

// PUT /appointments/cancel

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);

appointmentRouter.get("/appointment", oneAppointment);

appointmentRouter.post("/schedule", createAppointment);

appointmentRouter.put("/cancel", cancelAppointment);

export default appointmentRouter;