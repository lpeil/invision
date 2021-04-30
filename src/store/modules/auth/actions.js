export function setUserSession(user) {
  return {
    type: '@auth/SET_SESSION',
    user,
  };
}

export function removeUserSession() {
  return {
    type: '@auth/REMOVE_SESSION',
  };
}
