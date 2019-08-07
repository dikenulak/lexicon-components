"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonStyled = _interopRequireDefault(require("./ButtonStyled"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /**
   * @default null
   * children passed within button
   */
  children: _propTypes.default.node,

  /**
   * @default ''
   * className passed along with the button
   */
  className: _propTypes.default.string,

  /**
   * @default false
   * button is primary or not.
   */
  primary: _propTypes.default.bool,

  /**
   * @default false
   * button is secondary
   */
  secondary: _propTypes.default.bool,

  /**
   * @default false
   * button is small
   */
  small: _propTypes.default.bool,

  /**
   * @default false
   * small
   */
  active: _propTypes.default.bool,

  /**
   * @default false
   * disabled
   */
  disabled: _propTypes.default.bool
};
var defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false
};

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      outlined = _ref.outlined,
      small = _ref.small,
      active = _ref.active,
      link = _ref.link,
      disabled = _ref.disabled,
      iconName = _ref.iconName,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "primary", "secondary", "outlined", "small", "active", "link", "disabled", "iconName"]);

  var classes = (0, _classnames.default)({
    primary: primary,
    secondary: secondary,
    outlined: outlined,
    small: small,
    active: active,
    link: link,
    disabled: disabled
  }, className);
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_ButtonStyled.default, _extends({
    className: classes,
    iconName: iconName
  }, otherProps), iconName !== undefined ? _react.default.createElement(_index.Icon, {
    iconName: iconName
  }) : '', children));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map