"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("../../utils/theme/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        display: inline-block;\n        fill: currentColor;\n        width: ", ";\n        height: ", ";;\n        margin-top: -3px;\n        vertical-align: middle;\n        pointer-events: ", ";\n        opacity: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconStyled = _styledComponents.default.span(_templateObject(), function (props) {
  return props.iconWidth || "16px";
}, function (props) {
  return props.iconHeight || "16px";
}, function (props) {
  return props.disabled ? "none" : "unset";
}, function (props) {
  return props.disabled ? "0.4" : "0.8";
});

var _default = IconStyled;
exports.default = _default;

//# sourceMappingURL=IconStyled.js.map