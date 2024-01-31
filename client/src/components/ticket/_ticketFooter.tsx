import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { FooterUI } from './interfaces/TicketFooter';
import PropTypes from 'prop-types';
import { Status } from '../createTicketForm/enums/Status';

export const TicketFooter:FC<FooterUI> = (
  props,
): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (event) => console.log(event),
    onClick = (event) => console.log(event),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
        <Switch
          defaultChecked={status === Status.inProgress}
          onChange={(event) => onStatusChange(event, id)}
          color="warning"
        />}

      />
      <Button
        onClick={(event) => onClick(event, id)}
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: 'white'
        }}
      >
        Mark as complete
      </Button>
    </Box>
  );
};

TicketFooter.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
