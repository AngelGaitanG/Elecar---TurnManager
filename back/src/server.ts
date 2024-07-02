import express from "express";
import router from "./routes/indexRouter";
import morgan from "morgan";
import "reflect-metadata";
import cors from "cors";
import path from "path";


const server = express();
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(router);
server.use(express.static('src/public'));
export default server;
