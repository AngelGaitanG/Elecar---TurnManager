// GET /appointments
// GET /appointments/:id

import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointments, oneAppointment } from "../controllers/appointmentsController";

// POST /appointments/schedule

// PUT /appointments/cancel

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);

appointmentRouter.get("/appointment", oneAppointment);

appointmentRouter.post("/appointment/schedule", createAppointment);

appointmentRouter.put("/appointment/cancel", cancelAppointment);

export default appointmentRouter;