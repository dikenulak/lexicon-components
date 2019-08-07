"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("../../utils/theme/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid transparent;\n    line-height: 10px;\n    max-width: 100%;\n    white-space: inherit;\n    word-wrap: break-word;\n    display: inline-block;\n    padding: 4px 8px;\n    font-size: 10px;\n    font-weight: 600;\n    text-align: center;\n    vertical-align: baseline;\n    border-radius: 30px;\n    \n    ", "\n    \n    ", "\n    \n    ", "\n    \n    ", "\n    \n    ", "\n    \n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BadgeStyled = _styledComponents.default.span(_templateObject(), function (props) {
  return props.className === 'primary' && {
    backgroundColor: _color.default.primary.P500,
    color: _color.default.grey.G050,
    borderColor: _color.default.primary.P500
  };
}, function (props) {
  return props.className === 'light' && {
    backgroundColor: _color.default.grey.G300,
    borderColor: _color.default.grey.G300,
    color: _color.default.grey.G1400
  };
}, function (props) {
  return props.className === 'success' && {
    backgroundColor: _color.default.secGreen.SG500,
    borderColor: _color.default.secGreen.SG500,
    color: _color.default.grey.G050
  };
}, function (props) {
  return props.className === 'info' && {
    backgroundColor: _color.default.primary.P500,
    borderColor: _color.default.primary.P500,
    color: _color.default.grey.G050
  };
}, function (props) {
  return props.className === 'danger' && {
    backgroundColor: _color.default.secRed.SR500,
    borderColor: _color.default.secRed.SR500,
    color: _color.default.grey.G050
  };
}, function (props) {
  return props.className === 'warning' && {
    backgroundColor: _color.default.secYellow.SY500,
    borderColor: _color.default.secYellow.SY500,
    color: _color.default.grey.G050
  };
});

var _default = BadgeStyled;
exports.default = _default;

//# sourceMappingURL=BadgeStyled.js.map