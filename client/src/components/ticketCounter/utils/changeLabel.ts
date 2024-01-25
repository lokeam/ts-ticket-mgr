import { TicketCounterStatusType } from "../interfaces/Counter";
import { Status } from "../../createTicketForm/enums/Status";

export const changeLabel = (
  status: TicketCounterStatusType,
  ): string => {
    switch (status) {
      case Status.todo:
        return `Todos`;
      case Status.inProgress:
        return `In Progress`;
      case Status.completed:
        return `Completed`;
    }
 };
