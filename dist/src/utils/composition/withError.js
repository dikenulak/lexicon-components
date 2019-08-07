"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withErrorScreen;

var _react = _interopRequireDefault(require("react"));

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// If you have internal state and/or refs,
// prefer class extends React.Component over React.createClass
// And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:
// A component’s displayName may be used by developer tools or in error messages,
// and having a value that clearly expresses this relationship
// helps people understand what is happening.
function withErrorScreen(WrappedComponent) {
  function WithLoadingScreen(_ref) {
    var loading = _ref.loading,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["loading", "children"]);

    if (loading) {
      return _react.default.createElement("span", null, " Data is Loading with Loading Flag ");
    }

    return _react.default.createElement(WrappedComponent, props, children);
  }

  WithLoadingScreen.displayName = "withErrorScreen(".concat((0, _component.getDisplayName)(WrappedComponent), ")");
  return WithLoadingScreen;
}

//# sourceMappingURL=withError.js.map