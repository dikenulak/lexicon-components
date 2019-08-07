"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMouseClickListener = exports.addMouseClickListener = void 0;

var addMouseClickListener = function addMouseClickListener(callBack) {
  document.addEventListener('mousedown', callBack);
  document.addEventListener('touchstart', callBack);
};

exports.addMouseClickListener = addMouseClickListener;

var removeMouseClickListener = function removeMouseClickListener(callBack) {
  document.removeEventListener('mousedown', callBack);
  document.removeEventListener('touchstart', callBack);
};

exports.removeMouseClickListener = removeMouseClickListener;

//# sourceMappingURL=event.js.map