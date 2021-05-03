import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Routes />
    </div>
  </Provider>
);

if (window.Cypress) {
  window.store = store;
}

export default App;
