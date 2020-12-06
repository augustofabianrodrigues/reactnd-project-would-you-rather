export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';

export function signIn(userId, referrer) {
  return {
    type: SIGN_IN,
    payload: { userId, referrer },
  };
}

export function signUp(user, referrer) {
  return {
    type: SIGN_UP,
    payload: { user, referrer },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
