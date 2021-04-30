import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => (user?.id ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/sign', state: { from: props.location } }}
        />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  location: {},
};

export default PrivateRoute;
