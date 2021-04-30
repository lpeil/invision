/* eslint-disable no-param-reassign */
const initialState = JSON.parse(localStorage.getItem('auth')) || {};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SET_SESSION':
      state = action.user;
      localStorage.setItem('auth', JSON.stringify(state));

      return state;
    case '@auth/REMOVE_SESSION':
      state = {};
      localStorage.setItem('auth', JSON.stringify(state));

      return state;
    default:
      return state;
  }
}
