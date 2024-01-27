import { Router, Request, Response } from "express";
import { TicketController } from "./tickets.controller";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets", (request:Request, response:Response) => {
  const ticketController = new TicketController();
  ticketController.getAll()
});