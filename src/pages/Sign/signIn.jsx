/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import {
  TextField, Button, Grid,
} from '@material-ui/core';

import { setUserSession } from '../../store/modules/auth/actions';

import GoogleIcon from '../../assets/icon/google';

const errorsMessages = {
  email: 'This e-mail is not a valid email',
  empty: 'This field can not be empty',
  notUser: 'This email is incorrect',
  password: 'This password is incorrect',
};

const SignIn = ({ changePage }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const schema = yup.object().shape({
      email: yup
        .string(errorsMessages.email).email(errorsMessages.email).required(errorsMessages.empty),
      password: yup.string().required(errorsMessages.empty),
    });

    schema
      .validate({ email, password }, {
        abortEarly: false,
      })
      .then(async (values) => {
        // Example of validation
        // Should be a request
        const thisUser = users.filter((user) => user.email === values.email)[0];

        if (!thisUser) {
          return setErrors({ email: errorsMessages.notUser });
        }

        if (thisUser.password !== values.password) {
          return setErrors({ password: errorsMessages.password });
        }

        dispatch(setUserSession(thisUser));
        return true;
      })
      .catch((yupErrors) => {
        const formErros = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const yupError of yupErrors.inner) {
          formErros[yupError.path] = yupError.message;
        }

        setErrors(formErros);
      });
  };

  return (
    <>
      <p className="font font-size-5 title text-center">
        Welcome to Invision
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          name="Email"
          label="Email"
          fullWidth
          value={email}
          error={!!errors?.email}
          helperText={errors?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          fullWidth
          value={password}
          error={!!errors?.password}
          helperText={errors?.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid container direction="row-reverse">
          <p className="font font-size-1">Forgot password?</p>
        </Grid>
        <Button type="submit" variant="contained">Sign In</Button>
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
