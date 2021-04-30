const initialState = JSON.parse(localStorage.getItem('users')) || [];

export default function users(state = initialState, action) {
  switch (action.type) {
    case '@users/CREATE_NEW':
      state.push(action.user);
      localStorage.setItem('users', JSON.stringify(state));

      return state;
    default:
      return state;
  }
}
