import React, { FC, ReactElement, useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle
} from '@mui/material';

import { CreateTicket } from '../ticketArea/interfaces/createTicket';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

import { TicketDescriptionField } from './_ticketDescriptionField';
import { TicketTitleField } from './_ticketTitleField';
import { TicketDateField } from './_ticketDateField';
import { TicketSelectField } from './_ticketSelectField';
import { sendApiRequest } from '../../utils/sentApiRequest';


export const CreateTicketForm: FC = (): ReactElement => {
  const [ title, setTitle ] = useState<string | undefined>(undefined);
  const [ description, setDescription ] = useState<string | undefined>(undefined);
  const [ date, setDate ] = useState<Date | null>(new Date());
  const [ status, setStatus] = useState<string>(Status.todo);
  const [ priority, setPriority ] = useState<string>(Priority.normal);
  const [ showSuccess, setShowSuccess ] = useState<boolean>(false);

  // todo: need mutation here
  const createTicketMutation = useMutation({
    mutationFn: (data:CreateTicket) => sendApiRequest(
      'http://localhost:3200/tickets',
      'POST',
      data,
    )
  });

  // todo: implement stronger library for field validation
  function createTicketHandler () {
    if (!title || !date || !description) {
      return;
    }

    const ticket: CreateTicket = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTicketMutation.mutate(ticket);
  }

  /* Manage state changes */
  useEffect(() => {
    if (createTicketMutation.isSuccess) {
      setShowSuccess(true);
    }

    const successTimer = setTimeout(() => {
      setShowSuccess(false)
    }, 5000);

    return () => clearTimeout(successTimer);
  }, [createTicketMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      { showSuccess && (
        <Alert
          severity="success"
          sx={{
            width: '100%',
            marginBottom: '16px'
          }}
        >
        <AlertTitle>Success</AlertTitle>
          Task created successfully!
        </Alert>
      )}
      <Typography
        mb={2}
        component="h2"
        variant="h6"
      >
        Create ticket
      </Typography>
      <Stack
        sx={{width: '100%'}}
        spacing={2}
      >
        <TicketTitleField
          onChange={(event) => setTitle(event.target.value)}
        />
        <TicketDescriptionField
          disabled={createTicketMutation.isPending}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TicketDateField
          disabled={createTicketMutation.isPending}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{width: '100%'}}
        >
          <TicketSelectField
            disabled={createTicketMutation.isPending}
            label="Status"
            name="status"
            value={status}
            onChange={(event) => setStatus(event.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TicketSelectField
            disabled={createTicketMutation.isPending}
            label="Priority"
            name="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
        { createTicketMutation.isPending && <LinearProgress /> }
        <Button
          disabled={
            !title ||
            !description ||
            !date ||
            !status ||
            !priority
          }
          onClick={createTicketHandler}
          size="large"
          variant="contained"
          fullWidth
        >Create Ticket</Button>
      </Stack>
    </Box>
  );
};
