import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => (((user?.id && auth) || (!user?.id && !auth)) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: auth ? '/sign' : '/', state: { from: props.location } }}
        />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  auth: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  auth: false,
  location: {},
};

export default PrivateRoute;
