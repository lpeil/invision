import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';

import { Carousel } from '../../components';

import SignIn from './signIn';
import SignUp from './signUp';

const Sign = () => {
  const [page, setPage] = useState('signIn');

  return (
    <Grid container direction="row">
      <Hidden smDown>
        <Grid item xs={6}>
          <Carousel />
        </Grid>
      </Hidden>
      <Grid container item xs={12} md={6} justify="center">
        <Grid
          xs={10}
          container
          item
          justify="center"
          alignItems="center"
          direction="column"
          className="sign-page"
        >
          <Grid container item direction="row-reverse">
            <Grid item>
              <h1 className="font font-size-6 color-black heavy">
                Invision
              </h1>
            </Grid>
          </Grid>
          <Grid
            xs={6}
            item
            container
            alignItems="center"
            direction="column"
            className="sign-container"
          >
            {
              page === 'signIn'
                ? <SignIn changePage={setPage} />
                : <SignUp changePage={setPage} />
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sign;
