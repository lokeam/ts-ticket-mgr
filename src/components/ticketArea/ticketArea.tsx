import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';

import { TicketCounter } from '../ticketCounter/ticketCounter';


export const TicketArea: FC = (): ReactElement => {
  return (
      <Grid item md={8} px={4}>
        <Box mb={8} px={4}>
          <h2>Task Status as of{' '}
            {format(new Date(), 'PPPP')}
          </h2>
        </Box>
        <Grid
          container
          display="flex"
          justifyContent="center"
        >
          <Grid
            item
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            md={10}
            xs={12}
            mb={8}
          >
            <TicketCounter />
            <TicketCounter />
            <TicketCounter />
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="column"
            xs={10}
            md={8}
          >
            <Box>Task Here</Box>
          </Grid>
        </Grid>
    </Grid>
  )
};