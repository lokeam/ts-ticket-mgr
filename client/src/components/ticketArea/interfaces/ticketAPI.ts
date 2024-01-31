import { Priority } from "../../createTicketForm/enums/Priority";
import { Status } from "../../createTicketForm/enums/Status";

export interface TaskAPI {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
