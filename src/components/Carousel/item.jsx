import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

const CarouselItem = ({ image, title, description }) => (
  <Grid
    container
    className="item"
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Grid container item justify="center">
      <img src={image} alt={title} />
    </Grid>
    <Grid item container justify="center">
      <h1 className="font font-size font-size-5 color-white">
        {title}
      </h1>
    </Grid>
    <Grid item container justify="center">
      <p className="font font-size font-size-4 color-white">
        {description}
      </p>
    </Grid>
  </Grid>
);

CarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CarouselItem;
