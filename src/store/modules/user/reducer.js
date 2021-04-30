/* eslint-disable no-param-reassign */
// import produce from 'immer';
const initialState = JSON.parse(localStorage.getItem('user')) || {};

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
