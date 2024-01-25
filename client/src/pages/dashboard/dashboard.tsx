import React, { FC, ReactElement} from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TicketArea } from '../../components/ticketArea/ticketArea';

export const Dashboard: FC = () : ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TicketArea />
      <Sidebar />
    </Grid>
  );
};