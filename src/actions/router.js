export const SET_REDIRECT = 'SET_REDIRECT';
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';

export function setRedirect(to) {
  return {
    type: SET_REDIRECT,
    payload: { to },
  };
}

export function clearRedirect() {
  return {
    type: CLEAR_REDIRECT,
  };
}
