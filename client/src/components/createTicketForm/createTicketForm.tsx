import React, { FC, ReactElement, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle
} from '@mui/material';

import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

import { TicketDescriptionField } from './_ticketDescriptionField';
import { TicketTitleField } from './_ticketTitleField';
import { TicketDateField } from './_ticketDateField';
import { TicketSelectField } from './_ticketSelectField';


export const CreateTicketForm: FC = (): ReactElement => {
  const [ title, setTitle ] = useState<string | undefined>(undefined);
  const [ description, setDescription ] = useState<string | undefined>(undefined);
  const [ date, setDate ] = useState<Date | null>(new Date());
  const [ status, setStatus] = useState<string>(Status.todo);
  const [ priority, setPriority ] = useState<string>(Priority.normal);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
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
          onChange={(event) => setDescription(event.target.value)}
        />
        <TicketDateField
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{width: '100%'}}
        >
          <TicketSelectField
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
        <LinearProgress />
        <Button
          size="large"
          variant="contained"
          fullWidth
        >Create Ticket</Button>
      </Stack>
    </Box>
  );
};