import { Router, Request, Response } from "express";
import { TicketController } from "./tickets.controller";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets",
  async (request:Request, response:Response) => {

  const ticketController = new TicketController();
  const allTickets = await ticketController.getAll()

  response.json(allTickets).status(200);
});

ticketRouter.post('/tickets', (request:Request, response:Response) => {})

