import { Router, Request, Response } from "express";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets", (request:Request, response:Response) => {
  response.send("Hello from Express Server");
});