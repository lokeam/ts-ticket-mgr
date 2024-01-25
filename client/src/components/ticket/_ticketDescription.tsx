import React, { FC, ReactElement } from 'react';
import { Box, Typography } from   '@mui/material';
import { DescriptionText } from './interfaces/TicketDescription';
import PropTypes from 'prop-types';

export const TicketDescription: FC<DescriptionText> = (
  props,
): ReactElement => {
  const { description = 'The time has come, the walrus said' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TicketDescription.propTypes = {
  description: PropTypes.string,
};
