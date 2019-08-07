"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withLoading;

var _react = _interopRequireWildcard(require("react"));

var _component = require("./component");

var _index = require("../../components/index");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function withLoading(WrappedComponent) {
  function withLoadingScreen(_ref) {
    var loading = _ref.loading,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["loading", "children"]);

    return _react.default.createElement(_react.Fragment, null, loading && _react.default.createElement(_index.Loading, {
      title: "Loading data... Please wait!"
    }), _react.default.createElement(WrappedComponent, props, children));
  }

  withLoadingScreen.displayName = "LoadingAndError(".concat((0, _component.getDisplayName)(WrappedComponent), ")");
  return withLoadingScreen;
}

//# sourceMappingURL=withLoading.js.map