import { AppDataSource } from "../..index";
import { Ticket } from "./tickets.entity";

export class TicketController {
  constructor(
    private taskRespository =
      AppDataSource.getRepository(
        Ticket,
      )) {}
  public async getAll(): Promise<Ticket[]> {}
}