"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("../../utils/theme/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .alert {\n    position: relative;\n    padding: 20px 40px 20px 15px;\n    margin-bottom: 15px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    display: flex;\n    font-size: 16px;\n    word-wrap: break-word;\n    box-shadow: 0 0.5rem 2rem -0.25rem rgba(0,0,0,.3);\n    \n    ", "\n    \n    ", "\n    \n    ", "\n    \n    ", "\n    \n    &:last-child {\n      margin-bottom: 0;\n    }\n    \n    &-dismiss {\n      position: absolute;\n      right: 0;\n      top: 47%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      pointer-events: auto;\n    }\n    \n    &-message {\n        max-width: 300px;\n        display: inline-block;\n        line-height: 22px;\n    }\n    \n    .icon {\n      margin-top: 0;\n    }\n    \n    .icon, .alert-lead {\n      margin-right: 15px;\n      font-weight: normal;\n      line-height: 22px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AlertStyled = _styledComponents.default.div(_templateObject(), function (props) {
  return props.type === 'success' && {
    backgroundColor: _color.default.secGreen.SG050,
    borderColor: _color.default.secGreen.SG400,
    color: _color.default.secGreen.SG500
  };
}, function (props) {
  return props.type === 'info' && {
    backgroundColor: _color.default.primary.P050,
    borderColor: _color.default.primary.P300,
    color: _color.default.primary.P500
  };
}, function (props) {
  return props.type === 'danger' && {
    backgroundColor: _color.default.secRed.SR050,
    borderColor: _color.default.secRed.SR300,
    color: _color.default.secRed.SR500
  };
}, function (props) {
  return props.type === 'warning' && {
    backgroundColor: _color.default.secYellow.SY050,
    borderColor: _color.default.secYellow.SY300,
    color: _color.default.secYellow.SY500
  };
});

var _default = AlertStyled;
exports.default = _default;

//# sourceMappingURL=AlertStyled.js.map