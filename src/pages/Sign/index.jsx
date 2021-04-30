import React from 'react';
import { Grid, Hidden } from '@material-ui/core';

import { Carousel } from '../../components';

const Sign = () => (
  <Grid container direction="row">
    <Hidden smDown>
      <Grid item xs={6}>
        <Carousel />
      </Grid>
    </Hidden>
    <Grid item xs={12} md={6}>Login</Grid>
  </Grid>
);

export default Sign;
