import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

class TicketController {
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
}

export ticketController = new TicketController();