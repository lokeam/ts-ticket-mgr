import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

export const Profile: FC = (): ReactElement => {
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
          A
        </Typography>
      </Avatar>
      <Typography
        variant="h6"
        color="text.primary"
      >
        Welcome, A
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