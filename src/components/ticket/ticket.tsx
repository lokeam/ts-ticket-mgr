import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TicketHeader } from './_ticketHeader';
import { TicketDescription } from './_ticketDescription';
import { TicketFooter } from './_ticketFooter';

export const Ticket: FC = ():ReactElement => {
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
        borderColor: 'error.light'
      }}
    >
      <TicketHeader />
      <TicketDescription />
      <TicketFooter />
    </Box>
  );
};