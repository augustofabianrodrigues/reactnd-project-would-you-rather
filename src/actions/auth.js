export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';

export function signIn(userId) {
  return {
    type: SIGN_IN,
    payload: { userId },
  };
}

export function signUp(user) {
  return {
    type: SIGN_UP,
    payload: { user },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
