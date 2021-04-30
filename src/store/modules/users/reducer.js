/* eslint-disable no-param-reassign */
import produce from 'immer';

const initialState = JSON.parse(localStorage.getItem('users')) || [];

export default function users(state = initialState, action) {
  switch (action.type) {
    case '@user/SET_SESSION':
      return produce(state, (draft) => {
        draft.push(action.user);

        return localStorage.setItem('users', JSON.stringify(draft));
      });
    default:
      return state;
  }
}
