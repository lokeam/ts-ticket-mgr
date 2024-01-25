import { Status } from "../../createTicketForm/enums/Status";

export type TicketCounterStatusType =
  | Status.todo
  | Status.inProgress
  | Status.completed;

export interface Counter {
  count?: number;
  status: TicketCounterStatusType;
}