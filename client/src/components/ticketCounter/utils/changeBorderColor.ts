import { TicketCounterStatusType } from "../interfaces/Counter";
import { Status } from "../../createTicketForm/enums/Status";

export const changeBorderColor = (
  status: TicketCounterStatusType,
): string => {
  switch(status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
