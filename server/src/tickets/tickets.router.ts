import { Router } from "express";
import { ticketController } from "./tickets.controller";
import { createValidator, updateValidator } from "./tickets.validator";

export const ticketRouter: Router = Router();

ticketRouter.get("/tickets", ticketController.getAll);

ticketRouter.post('/tickets',
  createValidator,
  ticketController.create,
);

ticketRouter.put('/tickets',
  updateValidator,
  ticketController.update,
);
