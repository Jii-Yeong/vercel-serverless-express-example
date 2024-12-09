import express, { Request, Response } from "express";

const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.send("hello express");
});

export default app;
