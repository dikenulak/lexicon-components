"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUser = getCurrentUser;
exports.hasCurrentUser = hasCurrentUser;
exports.checkAuthentication = checkAuthentication;

/**
 * Get current user from localStorage.
 *
 * @returns {object|null}
 */
function getCurrentUser() {
  var currentUser = localStorage.getItem('access_token');
  return currentUser != null;
}
/**
 * Check if local storage has a logged in user.
 *
 * @returns {boolean}
 */


function hasCurrentUser() {
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


function checkAuthentication(nextState, replace) {
  if (!hasCurrentUser()) {
    replace({
      pathname: '/login'
    });
  }
}

//# sourceMappingURL=authUtils.js.map