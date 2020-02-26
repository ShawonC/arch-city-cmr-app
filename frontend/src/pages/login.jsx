import React from 'react';
import { Box, TextField, Grid, Button} from '@material-ui/core';


export default function Login() {
	return (
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
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button fullWidth='true'
              variant="contained"
              color="primary"
              >
              Login
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <Button variant='text'
              fullWidth='true'>
              Create Account
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='text'
              fullWidth='true'>
              Forgot Password?
            </Button>
          </Grid>
        </Grid>
    </Box>
  );
};

