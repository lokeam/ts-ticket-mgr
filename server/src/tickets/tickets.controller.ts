import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";

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
    } catch(error) {
      console.log(error);
    }

    // Convert tickets to arr of objs
  }
}