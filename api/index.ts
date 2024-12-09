import express from "express";
import helloRouter from "./hello.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));

app.use("/hello", helloRouter);

export default app;
