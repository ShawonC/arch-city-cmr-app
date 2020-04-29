import React, {Component} from 'react';
import { Box, TextField, Grid, Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class NewUser extends Component{

  redirect(path){
    this.props.history.push(path)
  }
  
  render(){

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
              fullWidth='true'
              onClick={() => this.redirect('/login')}>
              Sign in instead
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };
};

export default withRouter(NewUser);