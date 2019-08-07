"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 24px;\n  margin-left: 16px;\n  color: #e7e7ed;\n  z-index: 999;\n\n  .loading-wrap {\n    background: #272833;\n    padding: 10px 30px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    border-radius: 4px;\n  }\n\n  .spinner {\n    position: relative;\n    margin-right: 30px;\n    transform: scale(0.7);\n  \n    &::before {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 7px;\n      height: 7px;\n      transform: translate3d(-50%, -50%, 0);\n      border-radius: 50%;\n      color: #fff;\n      content: '';\n      will-change: box-shadow;\n      animation: spinner-anim 1.3s infinite linear;\n    }\n  }\n\n  @keyframes spinner-anim {\n    0%,\n    100% {\n      box-shadow: 0 -15px 0 1px, 10px -10px 0 0, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 0;\n    }\n  \n    12.5% {\n      box-shadow: 0 -15px 0 0, 10px -10px 0 1px, 15px 0 0 0, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;\n    }\n  \n    25% {\n      box-shadow: 0 -15px 0 -5px, 10px -10px 0 0, 15px 0 0 1px, 10px 10px 0 0, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;\n    }\n  \n    37.5% {\n      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 0, 10px 10px 0 1px, 0 15px 0 0, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;\n    }\n  \n    50% {\n      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 0, 0 15px 0 1px, -10px 10px 0 0, -15px 0 0 -5px, -10px -10px 0 -5px;\n    }\n  \n    62.5% {\n      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 0, -10px 10px 0 1px, -15px 0 0 0, -10px -10px 0 -5px;\n    }\n  \n    75% {\n      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 0, -15px 0 0 1px, -10px -10px 0 0;\n    }\n  \n    87.5% {\n      box-shadow: 0 -15px 0 0, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 0, -15px 0 0 0, -10px -10px 0 1px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingStyled = _styledComponents.default.div(_templateObject());

var _default = LoadingStyled;
exports.default = _default;

//# sourceMappingURL=LoadingStyled.js.map