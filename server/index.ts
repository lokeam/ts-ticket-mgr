import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app:Express = express();
dotenv.config();

const port = process.env.PORT;

app.get("/", (request:Request, response:Response) => {
  response.send("Hello from Express Server");
});

app.listen(port);
