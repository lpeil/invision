import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Button } from '@material-ui/core';

import { removeUserSession } from '../../store/modules/auth/actions';

const HomePage = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUserSession());
  };

  return (
    <Grid container justify="center" style={{ marginTop: '50px' }}>
      <Grid container item direction="column" xs={10}>
        <Grid item>
          <h1 className="font font-size-5 color-black">
            Olá,
            {' '}
            {user.name}
            .
          </h1>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={logout}
          >
            Sair
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
