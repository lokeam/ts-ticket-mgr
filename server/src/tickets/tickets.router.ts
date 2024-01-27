import { Router } from "express";
import { ticketController } from "./tickets.controller";
import { createValidator } from "./tickets.validator";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets", ticketController.getAll);

ticketRouter.post('/tickets',
  createValidator,
  ticketController.create,
);
