"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _BreadCrumbStyledIndex = require("./BreadCrumbStyledIndex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumb = function BreadCrumb(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list;
  return _react.default.createElement(_BreadCrumbStyledIndex.BreadCrumbUlStyled, null, list.map(function (item) {
    return _react.default.createElement(_BreadCrumbStyledIndex.BreadCrumbLiStyled, {
      key: item.id,
      className: item.active ? 'active' : ''
    }, _react.default.createElement(_reactRouterDom.Link, {
      to: item.path
    }, item.title));
  }));
};

BreadCrumb.propTypes = {
  list: _propTypes.default.instanceOf(Array)
};
BreadCrumb.defaultProps = {
  list: []
};
var _default = BreadCrumb;
exports.default = _default;

//# sourceMappingURL=BreadCrumb.js.map