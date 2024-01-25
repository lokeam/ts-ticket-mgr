import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import { Counter } from './interfaces/Counter';
import { Status } from '../createTicketForm/enums/Status';
import { changeBorderColor } from './utils/changeBorderColor';
import { changeLabel } from './utils/changeLabel';
import PropTypes from 'prop-types';

export const TicketCounter:FC<Counter> = (
  props,
  ): ReactElement => {
    const {
      status = Status.todo,
      count = 0
    } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${changeBorderColor(status)}`,
          }}
        >
          <Typography
            color="#ffffff"
            variant="h4"
          >
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {changeLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TicketCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed
  ])
}
