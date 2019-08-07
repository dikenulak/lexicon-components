"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withPagination(WrappedComponent) {
  function withPaginatedBase(_ref) {
    var props = _extends({}, _ref);

    var pagination = props.pagination;

    var Pagination =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Pagination, _Component);

      function Pagination(props) {
        var _this;

        _classCallCheck(this, Pagination);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
          var _this$state = _this.state,
              page = _this$state.page,
              limit = _this$state.limit,
              offset = _this$state.offset;
          page += 1;
          limit += 1;
          offset += 1;

          _this.setState({
            page: page,
            limit: limit,
            offset: offset
          });
        });

        _this.state = {
          page: pagination.page,
          limit: pagination.limit,
          offset: pagination.offset
        };
        return _this;
      }

      _createClass(Pagination, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return _react.default.createElement("div", null, _react.default.createElement(WrappedComponent, props), _react.default.createElement("span", {
            onClick: function onClick() {
              return _this2.handleClick();
            }
          }, "Paginated component is rendered here ", JSON.stringify(this.state)));
        }
      }]);

      return Pagination;
    }(_react.Component);

    return _react.default.createElement(Pagination, null);
  }

  var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  withPaginatedBase.displayName = "withPagination(".concat(wrappedComponentName, ")");
  return withPaginatedBase;
}

var _default = withPagination;
exports.default = _default;

//# sourceMappingURL=withPagination.js.map