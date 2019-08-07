"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconStyled = _interopRequireDefault(require("./IconStyled"));

var _icons = _interopRequireDefault(require("../../icons.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /**
   * @default empty
   * children passed within button
   */
  iconName: _propTypes.default.string.isRequired,

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
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      small = _ref.small,
      active = _ref.active,
      disabled = _ref.disabled,
      iconName = _ref.iconName,
      iconHeight = _ref.iconHeight,
      iconWidth = _ref.iconWidth,
      otherProps = _objectWithoutProperties(_ref, ["name", "className", "primary", "secondary", "small", "active", "disabled", "iconName", "iconHeight", "iconWidth"]);

  var classes = (0, _classnames.default)('icon', {
    primary: primary,
    secondary: secondary,
    small: small,
    active: active,
    disabled: disabled
  }, className, name);
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_IconStyled.default, {
    iconName: iconName,
    iconWidth: iconWidth,
    iconHeight: iconHeight,
    disabled: disabled
  }, _react.default.createElement("svg", _extends({
    className: classes
  }, otherProps), _react.default.createElement("use", {
    xlinkHref: "".concat(_icons.default, "#").concat(iconName)
  }))));
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
var _default = Icon;
exports.default = _default;

//# sourceMappingURL=Icon.js.map