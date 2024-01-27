import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";
import { instanceToPlain } from "class-transformer";

export class TicketController {
  constructor(
    private taskRespository =
      AppDataSource.getRepository(
        Ticket,
      )) {}
  public async getAll(): Promise<Ticket[]> {
    // Init pointer to hold all tickets
    let allTickets: Ticket[];

    // Fetch all tickets from db
    try {
      allTickets = await this.taskRespository.find({
        order: {
          date: 'ASC',
        },
      });
    // Convert tickets to arr of objs
    allTickets = instanceToPlain(allTickets) as Ticket[];

    return allTickets;
    } catch(error) {
      console.log(error);
    }


  }
}