import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

export const TicketArea: FC = (): ReactElement => {
  return (
      <Grid
        item
        md={8}
        px={4}
      >
      <p>Content here</p>
    </Grid>
  )
};