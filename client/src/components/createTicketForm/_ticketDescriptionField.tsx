import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { InputEl } from './interfaces/InputEl';
import PropTypes from 'prop-types';

export const TicketDescriptionField: FC<InputEl> = (
  props,
  ): ReactElement => {
    const {
      onChange = (event) => console.log(event),
      disabled = false,
    } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Ticket Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TicketDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};
