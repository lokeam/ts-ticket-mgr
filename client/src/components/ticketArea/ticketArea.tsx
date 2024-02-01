import React, { FC, ReactElement } from 'react';
import {
  Alert,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../utils/sentApiRequest';

import { TicketCounter } from '../ticketCounter/ticketCounter';
import { Ticket } from '../ticket/ticket';
import { TicketApi } from './interfaces/ticketAPI';
import { UpdateTicket } from './interfaces/updateTicket';
import { Status } from '../createTicketForm/enums/Status';


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

  // create update ticket mutation
  const updateTicketMutation = useMutation({
    mutationFn: (data: UpdateTicket) => sendApiRequest(
      'http://localhost:3200/tickets',
      'PUT',
      data
    )
  });

  function onStatusChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTicketMutation.mutate({
      id,
      status: event.target.checked
        ? Status.inProgress
        : Status.todo,
    });
  }

  function markCompleteHandler(
    event:
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTicketMutation.mutate({
      id,
      status: Status.completed,
    })
  }

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

            {isPending ? ( <LinearProgress /> ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.status === Status.todo ||
                each.status === Status.inProgress ?
                (
                  <Ticket
                    date={new Date(each.date)}
                    description={each.description}
                    id={each.id}
                    key={index + each.priority}
                    onClick={markCompleteHandler}
                    onStatusChange={onStatusChangeHandler}
                    priority={each.priority}
                    status={each.status}
                    title={each.title}
                    />
                ) : (false);
              })
            )}
          </Grid>
        </Grid>
    </Grid>
  )
};