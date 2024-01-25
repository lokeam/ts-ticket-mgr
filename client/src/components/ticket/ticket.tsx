import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TicketHeader } from './_ticketHeader';
import { TicketDescription } from './_ticketDescription';
import { TicketFooter } from './_ticketFooter';
import { TicketUI } from './interfaces/Ticket';
import { Priority } from '../createTicketForm/enums/Priority';
import { changePriorityBorderColor } from './util/changePriorityBorderColor';
import PropTypes from 'prop-types';


export const Ticket: FC<TicketUI> = (
  props,
):ReactElement => {
  // Context API may be more appropriate here in the case of a more involved app
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'The time has come, the walrus said',
    priority = Priority.normal,
    onStatusChange = (event) => console.log(event),
    onClick = (event) => console.log(event)
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: `${changePriorityBorderColor(priority)}`
      }}
    >
      <TicketHeader title={title} date={date} />
      <TicketDescription description={description} />
      <TicketFooter
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

Ticket.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  priority: PropTypes.string,
};
