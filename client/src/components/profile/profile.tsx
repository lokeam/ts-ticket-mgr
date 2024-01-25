import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface Profile {
  name: string;
}

export const Profile: FC<Profile> = (props): ReactElement => {
  const { name = "Name" } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography
          variant='h4'
          color='text.primary'
        >
          {`${name.substring(0,1)}`}
        </Typography>
      </Avatar>
      <Typography
        variant="h6"
        color="text.primary"
      >
        {`Welcome, ${name}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
      >
        Profile Info
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
