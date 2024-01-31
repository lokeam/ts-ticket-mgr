import React, { FC, ReactElement } from 'react';
import {
  Alert,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../../utils/sentApiRequest';

import { TicketCounter } from '../ticketCounter/ticketCounter';
import { Ticket } from '../ticket/ticket';
import { TicketApi } from './interfaces/ticketAPI';


export const TicketArea: FC = (): ReactElement => {
  const { error, isPending, data, refetch } = useQuery(
    'tickets',
    async () => {
      return await sendApiRequest<TicketApi[]>(
        'http://localhost:3200/tickets',
        'GET',
      );
    }
  );

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
            {error && (
              <Alert severity="error">
                Error fetching tickets
              </Alert>
            )}

            {!error &&
              Array.isArray(data) &&
              data.length === 0 &&  (
                <Alert severity="warning">
                  No tickets in queue. Please create some tickets!
                </Alert>
            )}

            <Ticket id={"123"}/>
            <Ticket id={"123"}/>
            <Ticket id={"123"}/>
          </Grid>
        </Grid>
    </Grid>
  )
};