import express, { Express, Request, Response } from "express";

const app:Express = express();

const port = 3200;

app.get("/", (request:Request, response:Response) => {
  response.send("Hello from Express Server");
});

app.listen(port);
