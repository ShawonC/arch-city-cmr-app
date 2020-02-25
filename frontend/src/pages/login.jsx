import React from 'react';
import { Box, TextField, Grid } from '@material-ui/core';


export default function Login() {
	return (
    <div className='login-screen'>
      <Box className='login-window'
        border={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField className='login-box'
              placeholder='Username'
              variant='outlined'
              fullWidth='true'>
                placeholder
            </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField className='login-box'
                placeholder='Password'
                variant='outlined'
                fullWidth='true'>
                  placeholder
              </TextField>
            </Grid>
          </Grid>
      </Box>
    </div>
  );
};

/*
<Grid container spacing={3}>
            <Grid classname='login-prompt' 
              item xs={4}>
              Username:
            </Grid>
            <Grid item xs={8}>
            <TextField className='login-box'
              placeholder='Username'
              variant='outlined'>
                placeholder
            </TextField>
            </Grid>
            <Grid classname='login-prompt' 
              item xs={4}>
              Password:
            </Grid>
            <Grid item xs={8}>
              <TextField className='login-box'
                placeholder='Password'
                variant='outlined'>
                  placeholder
              </TextField>
            </Grid>
          </Grid>*/