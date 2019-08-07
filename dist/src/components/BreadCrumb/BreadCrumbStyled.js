"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumbLiStyled = exports.BreadCrumbUlStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay: inline-block;\npadding-right: 14px;\nmargin-right: 10px;\nposition: relative;\n\n&:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    transform: rotate(-45deg) translateY(-50%);\n    right: 0;\n    top: 48%;\n    border-style: solid;\n    border-color: #6b6c7e;\n    border-image: initial;\n    border-width: 0 1px 1px 0;\n}\n\n&:last-child{\nmargin-right: 0;\n\n&:after {\ndisplay: none;\n}\n}\n\na {\n    text-decoration: none;\n    color: #6b6c7e;\n    font-size: 12px;\n    line-height: 20px;\n    transition: all 0.3s ease-in-out;\n    \n    &:hover, &:focus {\n      color: #272833;\n      transition: all 0.3s ease-in-out;\n    }\n    \n    &.active {\n      color: #272833;\n      transition: all 0.3s ease-in-out;\n      font-weight: 600;\n    }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadCrumbUlStyled = _styledComponents.default.ul(_templateObject());

exports.BreadCrumbUlStyled = BreadCrumbUlStyled;

var BreadCrumbLiStyled = _styledComponents.default.li(_templateObject2());

exports.BreadCrumbLiStyled = BreadCrumbLiStyled;

//# sourceMappingURL=BreadCrumbStyled.js.map