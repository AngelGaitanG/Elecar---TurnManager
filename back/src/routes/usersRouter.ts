// GET a /users
// GET a /users/:id
// POST a /users/register

import { Router } from "express";
import { getUserbyId, getUsers,  loginUser,  registerUser } from "../controllers/usersController";
import registerDataCheck from "../middlewares/registerMiddleware";

const userRouter: Router = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserbyId);

userRouter.post("/register", registerDataCheck, registerUser);

userRouter.post("/login", loginUser);

export default userRouter