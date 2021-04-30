import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { history } from '../routes';
import rootReducer from './modules/rootReducer';

const middlewares = [routerMiddleware(history)];

const enhancer = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

export default createStore(rootReducer, compose(enhancer));
