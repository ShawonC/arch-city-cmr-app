import React from 'react';
import { Box, TextField, Grid, Button} from '@material-ui/core';


export default function NewUser() {
	return (
    <Box className='new-user'
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
              Create User
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={12}>
            <Button variant='text'
              fullWidth='true'>
              Sign in instead
            </Button>
          </Grid>
        </Grid>
    </Box>
  );
};