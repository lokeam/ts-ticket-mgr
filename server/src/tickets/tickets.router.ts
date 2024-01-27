import { Router, Request, Response } from "express";
import { ticketController } from "./tickets.controller";
import { createValidator } from "./tickets.validator";
import { validationResult } from "express-validator";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets",ticketController.getAll);

ticketRouter.post('/tickets',
  createValidator,
  async (request:Request, response:Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ errors: errors.array() });
    }
});
