import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UpdateResult } from "typeorm";

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

  // PUT
  public async update(request:Request, response:Response):Promise<Response> {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ errors: errors.array() });
    }
    // 1. Find ticket, if exists, return 400 if null
    let ticket: Ticket | null;
    // 2. Init pointer for updated ticket
    try {
      ticket = await AppDataSource
        .getRepository(Ticket)
        .findOne({
          where: { id: request.body.id },
        });
    } catch (errors) {
      return response
        .json({ error: 'Internal Server Error' })
        .status(500);
    }

    if (!ticket) {
      return response.status(400).json({
        error: 'Ticket with the given ID does not exist'
      });
    }

    let updatedTicket: UpdateResult;

    // 3. Update
    try {
      updatedTicket = await AppDataSource
        .getRepository(Ticket)
        .update(
          request.body.id,
          plainToInstance(
            Ticket, {
              status: request.body.status
            },
          ));
          // 4. Convert updated ticket to an obj
          updatedTicket = instanceToPlain(
            updatedTicket
          ) as UpdateResult;
          return response.json(updatedTicket).status(200);
    } catch (errors) {
      return response
        .json({ error: 'Internal Server Error'})
        .status(500);
    }
  }
}

export const ticketController = new TicketController();