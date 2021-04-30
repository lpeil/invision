import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';
import GoogleIcon from '../../assets/icon/google';

const SignIn = ({ changePage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <p className="font font-size-5 title text-center">
        Getting Started
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
        />
        <TextField
          label="Email"
          fullWidth
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
        />
        <Button variant="contained">Sign Up</Button>
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
        Sign up with Google
      </Button>
      <div className="font font-size-1 text-center">
        <span>
          By signing up, you agree to
          {' '}
          <b>Invision</b>
        </span>
        {' '}
      </div>
      <div className="font font-size-2 text-center">
        <button
          type="button"
          className="to-sign-up  font font-size-2"
        >
          Invision Terms
        </button>
        <span>
          {' '}
          and
          {' '}
        </span>
        <button
          type="button"
          className="to-sign-up font font-size-2"
        >
          Privacy Policy
        </button>
      </div>
      <div className="font font-size-1 already">
        <span>
          Already on
          {' '}
          <b>Invision</b>
          ?
        </span>
        {' '}
        <button
          type="button"
          className="to-sign-up  font font-size-1"
          onClick={() => changePage('signIn')}
        >
          Log In
        </button>
      </div>
    </>
  );
};

SignIn.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default SignIn;
