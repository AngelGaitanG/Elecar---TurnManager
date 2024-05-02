// GET a /users
// GET a /users/:id
// POST a /users/register

import { Router } from "express";
import { getUserbyId, getUsers, loginUser, registerUser } from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserbyId);

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

export default userRouter