import { Router, Request, Response } from "express";
import { TicketController } from "./tickets.controller";
import { createValidator } from "./tickets.validator";
import { validationResult } from "express-validator";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets",
  async (request:Request, response:Response) => {

  const ticketController = new TicketController();
  const allTickets = await ticketController.getAll()

  response.json(allTickets).status(200);
});

ticketRouter.post('/tickets',
  createValidator,
  //@ts-ignore
  async (request:Request, response:Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ errors: errors.array() });
    }
});
