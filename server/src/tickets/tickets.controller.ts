import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

class TicketController {

  // GET
  public async getAll(
    request:Request,
    response:Response
  ): Promise<Response> {
    // Init pointer to hold all tickets
    let allTickets: Ticket[];

    // Fetch all tickets from db
    try {
      allTickets = await AppDataSource.taskRespository.find({
        order: {
          date: 'ASC',
        },
      });
    // Convert tickets to arr of objs
    allTickets = instanceToPlain(allTickets) as Ticket[];

    return response.json(allTickets).status(200);
    } catch(errors) {
      return response
        .json({ error: 'Internal Server Error '})
        .status(500);
    }
  }

  // POST
  public async create(
    request:Request,
    response:Response
  ):Promise<Response> {
    const errors = validationResult(request);

    // 1. Create new ticket instance
    const newTicket = new Ticket();

    // 2. Add all required props to Ticket obj
    newTicket.title = request.body.title;
    newTicket.date = request.body.date;
    newTicket.description = request.body.description;
    newTicket.priority = request.body.priority;
    newTicket.status = request.body.status;

    // 3. Save Ticket to db
    let createdTicket: Ticket;

    try {
      createdTicket = await AppDataSource.getRepository(
        Ticket,
      ).save(newTicket);

      createdTicket = instanceToPlain(createdTicket) as Ticket;

      return response.json(createdTicket).status(201);
    } catch(errors) {
      return response
        .json({ error: 'Internal Server Error '})
        .status(500);
    }

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ errors: errors.array() });
    }
  }
}

export const ticketController = new TicketController();