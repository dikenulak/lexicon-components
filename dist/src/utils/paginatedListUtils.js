"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rowActionHolders = exports.tableData = void 0;

var _react = _interopRequireDefault(require("react"));

var _EventOperation = require("../data/enums/EventOperation");

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableData = function tableData(title, type, classNames) {
  return _react.default.createElement("th", {
    key: title,
    className: "".concat(type && 'text-right', " ").concat(classNames && classNames)
  }, title);
};

exports.tableData = tableData;

var rowActionHolders = function rowActionHolders() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onClickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return null;
  };
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var attribute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  return _react.default.createElement("td", {
    className: "actions text-right",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, type.includes(_EventOperation.EVENT_OPERATION.UPDATE) && _react.default.createElement("span", {
    onClick: function onClick() {
      return onClickHandler(_EventOperation.EVENT_OPERATION.UPDATE, element, attribute);
    }
  }, _react.default.createElement(_components.Icon, {
    iconName: "pencil"
  })), type.includes(_EventOperation.EVENT_OPERATION.DELETE) && _react.default.createElement("span", {
    onClick: function onClick() {
      return onClickHandler(_EventOperation.EVENT_OPERATION.DELETE, element, attribute);
    }
  }, _react.default.createElement(_components.Icon, {
    iconName: "trash"
  })));
};

exports.rowActionHolders = rowActionHolders;

//# sourceMappingURL=paginatedListUtils.js.map