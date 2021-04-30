/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = JSON.parse(localStorage.getItem('user')) || {};

export default function users(state = initialState, action) {
  switch (action.type) {
    case '@user/SET_SESSION':
      return produce(state, (draft) => {
        draft = action.user;

        localStorage.setItem('user', JSON.stringify(draft));
      });
    default:
      return state;
  }
}
