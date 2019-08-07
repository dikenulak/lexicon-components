"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("../../utils/theme/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  letter-spacing: 0;\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 1.5;\n  border-radius: 4px;\n  outline: none;\n  margin-right: 15px;\n  text-transform: capitalize;\n  \n  &:last-of-type {\n    margin-right: 0;  \n  }\n\n  ", "\n  \n  &:hover, &:focus {\n    ", "\n  }\n  \n  ", "\n  \n  &:hover, &:focus {\n    ", "\n  }\n  \n  ", "\n  \n  &:hover, &:focus {\n    ", "\n    }\n    \n    &.disabled {\n      opacity: 0.4;\n      cursor: no-drop;\n      pointer-events: none;\n      \n      &.primary {\n        background: #0E69FF;\n        border-color: #0E69FF;\n        color: #fff;\n      }\n      \n      &.secondary {\n        background: #FF4081;\n        border-color: #FF4081;\n        color: #fff;\n      }\n    }\n    \n    &.link {\n      padding: 0;\n      color: #0E69FF;\n      text-decoration: underline;\n      background: transparent;\n      \n      &:hover, &:focus {\n        color: #0056E0;\n        text-decoration: none;\n      }\n    }\n  \n  > span {\n    margin-left: 10px;\n    \n    &:first-child {\n      margin-left: 0;\n    }\n  } \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyled = _styledComponents.default.button(_templateObject(), function (props) {
  return props.className.includes('primary') && {
    backgroundColor: _color.default.primary.P500,
    color: _color.default.grey.G050,
    borderColor: _color.default.primary.P500
  };
}, function (props) {
  return props.className.includes('primary') && {
    backgroundColor: _color.default.primary.P600,
    borderColor: _color.default.primary.P600
  };
}, function (props) {
  return props.className.includes('secondary') && {
    backgroundColor: _color.default.secMagenta.SM500,
    color: _color.default.grey.G050,
    borderColor: _color.default.secMagenta.SM500
  };
}, function (props) {
  return props.className.includes('secondary') && {
    backgroundColor: _color.default.secMagenta.SM600,
    borderColor: _color.default.secMagenta.SM600
  };
}, function (props) {
  return props.className.includes('outlined') && {
    backgroundColor: _color.default.grey.G100,
    color: _color.default.grey.G1900,
    borderColor: _color.default.grey.G500
  };
}, function (props) {
  return props.className.includes('outlined') && {
    backgroundColor: _color.default.primary.P600,
    borderColor: _color.default.primary.P600,
    color: _color.default.grey.G050
  };
});

var _default = ButtonStyled;
exports.default = _default;

//# sourceMappingURL=ButtonStyled.js.map