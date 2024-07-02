// GET a /users
// GET a /users/:id
// POST a /users/register

import { Router } from "express";
import { changePhoto, getUserbyId, getUsers,  loginUser,  registerUser } from "../controllers/usersController";
import registerDataCheck from "../middlewares/registerMiddleware";
import { upload } from "../middlewares/upload";

const userRouter: Router = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserbyId);

userRouter.post("/register", registerDataCheck, registerUser);

userRouter.post("/:id/configuration", upload.single('file'), changePhoto)

userRouter.post("/login", loginUser);

export default userRouter