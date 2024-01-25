import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { InputEl } from './interfaces/InputEl';
import PropTypes from 'prop-types';

export const TicketTitleField: FC<InputEl> = (
  props,
  ): ReactElement => {
  const {
    onChange = (event) => console.log(event),
    disabled = false
  } = props;

  return (
    <TextField
      id="title"
      label="Ticket Title"
      placeholder="Ticket Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TicketTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};
