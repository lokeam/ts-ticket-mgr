import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TicketDescriptionField } from './_ticketDescriptionField';
import { TicketTitleField } from './_ticketTitleField';
import { TicketDateField } from './_ticketDateField';

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
      </Stack>
    </Box>
  );
};