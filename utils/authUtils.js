/**
 * Get current user from localStorage.
 *
 * @returns {object|null}
 */
export function getCurrentUser() {
  const currentUser = localStorage.getItem('access_token');
  return currentUser != null;
}

/**
 * Check if local storage has a logged in user.
 *
 * @returns {boolean}
 */
export function hasCurrentUser() {
  if (getCurrentUser()) {
    return true;
  }

  return false;
}

/**
 * Changes route to '/login' for unauthenticated users.
 *
 * @param {object} nextState
 * @param {function|object} replace
 */
export function checkAuthentication(nextState, replace) {
  if (!hasCurrentUser()) {
    replace({ pathname: '/login' });
  }
}
