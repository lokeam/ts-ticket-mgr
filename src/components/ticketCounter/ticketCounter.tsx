import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

export const TicketCounter:FC = (): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar>
          <Typography>10</Typography>
        </Avatar>
        <Typography>Subtitle here</Typography>
      </Box>
    </>
  );
};