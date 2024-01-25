import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { Priority } from './enums/Priority';
import { Status } from './enums/Status';

import { TicketDescriptionField } from './_ticketDescriptionField';
import { TicketTitleField } from './_ticketTitleField';
import { TicketDateField } from './_ticketDateField';
import { TicketSelectField } from './_ticketSelectField';


export const CreateTicketForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
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
        <TicketTitleField />
        <TicketDescriptionField />
        <TicketDateField />
        <Stack
          direction="row"
          spacing={2}
          sx={{width: '100%'}}
        >
          <TicketSelectField
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              }
            ]}
          />
          <TicketSelectField
            label="Priority"
            name="priority"
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
              }
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};