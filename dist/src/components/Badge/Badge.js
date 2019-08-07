"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BadgeStyled = _interopRequireDefault(require("./BadgeStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var propTypes = {
  /**
   * @default null
   * children passed within badge
   */
  children: _propTypes.default.node,

  /**
   * @default ''
   * children passed along with the badge
   */
  className: _propTypes.default.string,

  /**
   * @default false
   * className passed for badge.
   */
  primary: _propTypes.default.bool,

  /**
   * @default false
   * badge is primary
   */
  secondary: _propTypes.default.bool,

  /**
   * @default false
   * badge is success
   */
  success: _propTypes.default.bool,

  /**
   * @default false
   * badge is for warning
   */
  warning: _propTypes.default.bool,

  /**
   * @default false
   * light for badge
   */
  light: _propTypes.default.bool,

  /**
   * @default false
   * badge is for info
   */
  info: _propTypes.default.bool,

  /**
   * @default false
   * badge is for error
   */
  error: _propTypes.default.bool
};
var defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  light: false,
  info: false,
  error: false
};

var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      warning = _ref.warning,
      light = _ref.light,
      info = _ref.info,
      error = _ref.error,
      label = _ref.label;
  var classes = (0, _classnames.default)({
    primary: primary,
    secondary: secondary,
    success: success,
    warning: warning,
    light: light,
    info: info,
    error: error
  }, className);
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_BadgeStyled.default, {
    className: classes
  }, _react.default.createElement("span", null, label), children));
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;

//# sourceMappingURL=Badge.js.map