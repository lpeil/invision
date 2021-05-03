export function createNewUser(user) {
  return {
    type: '@users/CREATE_NEW',
    user,
  };
}

export function clearUsers() {
  return {
    type: '@users/CLEAR',
  };
}
