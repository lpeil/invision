import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Button, Grid } from '@material-ui/core';
import GoogleIcon from '../../assets/icon/google';

const SignIn = ({ changePage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <p className="font font-size-5 title text-center">
        Welcome to Invision
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
        />
        <Grid container direction="row-reverse">
          <p className="font font-size-1">Forgot password?</p>
        </Grid>
        <Button variant="contained">Sign In</Button>
      </form>
      <div className="divider">
        <div />
        <span className="font font-size-1">Or</span>
      </div>
      <Button
        variant="contained"
        className="google"
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
      <div className="font font-size-1 text-center">
        <span>
          New
          {' '}
          <b>Invision</b>
          ?
        </span>
        {' '}
        <button
          type="button"
          className="to-sign-up font font-size-1"
          onClick={() => changePage('signUp')}
        >
          Create Account
        </button>
      </div>
    </>
  );
};

SignIn.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default SignIn;
