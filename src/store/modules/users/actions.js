export function createNewUser(user) {
  return {
    type: '@users/CREATE_NEW',
    user,
  };
}
