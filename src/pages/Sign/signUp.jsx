import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { TextField, Button } from '@material-ui/core';

import { createNewUser } from '../../store/modules/users/actions';
import { setUserSession } from '../../store/modules/auth/actions';

import GoogleIcon from '../../assets/icon/google';

const errorsMessages = {
  email: 'This e-mail is not a valid email',
  empty: 'This field can not be empty',
  userExists: 'This email has already been used',
  password: 'This password must have at least 6 characters',
};

const SignIn = ({ changePage }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const schema = yup.object().shape({
      name: yup.string().required(errorsMessages.empty),
      email: yup
        .string(errorsMessages.email).email(errorsMessages.email).required(errorsMessages.empty),
      password: yup.string().required(errorsMessages.empty).min(6, errorsMessages.password),
    });

    schema
      .validate({ name, email, password }, {
        abortEarly: false,
      })
      .then((values) => {
        // Example of validation
        // Should be a request

        if (users.filter((user) => user.email === values.email)?.length) {
          return setErrors({ email: errorsMessages.userExists });
        }

        const thisUser = {
          id: uuidv4(),
          ...values,
        };

        dispatch(createNewUser(thisUser));
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
        Getting Started
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          value={name}
          error={!!errors?.name}
          helperText={errors?.name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          error={!!errors?.email}
          helperText={errors?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          value={password}
          error={!!errors?.password}
          helperText={errors?.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">Sign Up</Button>
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
