import { DescriptionText } from './TicketDescription';
import { TicketDateTitle } from "./TicketHeader";
import { FooterUI } from './TicketFooter';

export interface TicketUI
  extends TicketDateTitle, DescriptionText, FooterUI {
    id?: string,
    priority?: string,
    status?: string,
  };