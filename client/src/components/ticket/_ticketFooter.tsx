import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { FooterUI } from './interfaces/TicketFooter';
import PropTypes from 'prop-types';

export const TicketFooter:FC<FooterUI> = (
  props,
): ReactElement => {
  const {
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
          onChange={(event) => onStatusChange(event)}
          color="warning"
        />}

      />
      <Button
        onClick={(event) => onClick(event)}
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
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
