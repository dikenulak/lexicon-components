"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayName = getDisplayName;
exports.default = void 0;

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var _default = getDisplayName;
exports.default = _default;

//# sourceMappingURL=component.js.map