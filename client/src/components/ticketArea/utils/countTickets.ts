import { Status } from './../../createTicketForm/enums/Status';
import { TicketApi } from "../interfaces/ticketAPI";
import { TicketCounterStatusType } from "../../ticketCounter/interfaces/Counter";}

export const countTickets = (
  tickets: TicketApi,
  status: TicketCounterStatusType,
  ): number => {
    if (!Array.isArray(tickets)) {
      return 0;
    }

    const totalTickets = tickets.filter((ticket) => {
      return ticket.status === status;
    });

    return totalTickets.length;
};
