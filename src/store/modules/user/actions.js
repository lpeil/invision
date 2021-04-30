export function setUserSession(user) {
  return {
    type: '@user/SET_SESSION',
    user,
  };
}
