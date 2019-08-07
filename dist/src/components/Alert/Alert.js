"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AlertStyled = _interopRequireDefault(require("./AlertStyled"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /**
   * @default null
   * children passed within alert
   */
  children: _propTypes.default.node,

  /**
   * @default ''
   * className passed along with the alert
   */
  className: _propTypes.default.string,

  /**
   * @default false
   * alert is primary or not.
   */
  primary: _propTypes.default.bool,

  /**
   * @default false
   * alert is secondary
   */
  secondary: _propTypes.default.bool,

  /**
   * @default false
   * alert is small
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
  disabled: _propTypes.default.bool,

  /**
   * @default false
   * type
   */
  type: _propTypes.default.string
};
var defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  secondary: false,
  small: false,
  active: false,
  disabled: false,
  type: false
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      title = _ref.title,
      type = _ref.type,
      className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      small = _ref.small,
      active = _ref.active,
      disabled = _ref.disabled,
      iconName = _ref.iconName,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties(_ref, ["children", "title", "type", "className", "primary", "secondary", "small", "active", "disabled", "iconName", "onChange"]);

  var classes = (0, _classnames.default)({
    primary: primary,
    secondary: secondary,
    small: small,
    active: active,
    disabled: disabled,
    iconName: iconName
  }, className);
  return active && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_AlertStyled.default, _extends({
    type: type
  }, otherProps), _react.default.createElement("div", {
    className: "alert-container ".concat(classes)
  }, _react.default.createElement("div", {
    className: "alert alert-".concat(type || 'info')
  }, _react.default.createElement(_.Icon, {
    iconName: iconName
  }), _react.default.createElement("strong", {
    className: "alert-lead"
  }, title, ":", ' '), _react.default.createElement("span", {
    className: "alert-message"
  }, children), _react.default.createElement("span", {
    className: "alert-dismiss",
    onClick: function onClick() {
      return onChange();
    }
  }, _react.default.createElement(_.Icon, {
    iconName: "times",
    iconWidth: "12px",
    iconHeight: "12px"
  }))))));
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
var _default = Alert;
exports.default = _default;

//# sourceMappingURL=Alert.js.map