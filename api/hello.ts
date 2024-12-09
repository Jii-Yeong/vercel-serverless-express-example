import express, { Request, Response } from "express";

const helloRouter = express.Router();

helloRouter.get("/text", (req: Request, res: Response) => {
  res.send("hello express");
});

export default helloRouter;
