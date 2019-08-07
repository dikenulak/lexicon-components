"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exampleHoc = exports.exampleRequestHoc = exports.trackPromise = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// receives callback as a prop;
// this callback returns a promise;
var trackPromise = function trackPromise(propName) {
  return function (WrappedComponent) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(TrackPromiseContainer, _React$Component);

      function TrackPromiseContainer(props) {
        var _this;

        _classCallCheck(this, TrackPromiseContainer);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackPromiseContainer).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "trackPromise", function () {
          var callback = _this.props[propName];

          _this.setState({
            loading: true,
            data: null,
            error: null
          });

          return callback.apply(void 0, arguments).then(function (data) {
            _this.setState({
              data: data,
              loading: false
            });
          }).catch(function (error) {
            _this.setState({
              error: error,
              loading: false
            });

            throw error;
          });
        });

        _this.state = {
          loading: false,
          data: null,
          error: null
        };
        return _this;
      }

      _createClass(TrackPromiseContainer, [{
        key: "render",
        value: function render() {
          var _this$state = this.state,
              loading = _this$state.loading,
              data = _this$state.data,
              error = _this$state.error;

          var newProps = _defineProperty({
            loading: loading,
            data: data,
            error: error
          }, propName, this.trackPromise);

          return _react.default.createElement(WrappedComponent, _extends({}, this.props, newProps));
        }
      }]);

      return TrackPromiseContainer;
    }(_react.default.Component), _temp;
  };
};

exports.trackPromise = trackPromise;

var exampleRequestHoc = function exampleRequestHoc(WrappedComponent) {
  var _temp2;

  return _temp2 =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(ExampleRequestContainer, _React$Component2);

    function ExampleRequestContainer() {
      var _getPrototypeOf2;

      var _this2;

      _classCallCheck(this, ExampleRequestContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExampleRequestContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this2), "makeRequest", function () {
        return fetch('someUrl');
      });

      return _this2;
    }

    _createClass(ExampleRequestContainer, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({}, this.props, {
          makeRequest: this.makeRequest
        }));
      }
    }]);

    return ExampleRequestContainer;
  }(_react.default.Component), _temp2;
};

exports.exampleRequestHoc = exampleRequestHoc;

var exampleHoc = function exampleHoc(WrappedComponent) {
  return function ExampleContainer(props) {
    var loading = props.loading,
        error = props.error,
        data = props.data;

    if (loading) {
      return _react.default.createElement("span", null, "Loading");
    }

    if (error) {
      return _react.default.createElement("span", null, "Error");
    }

    return _react.default.createElement(WrappedComponent, _extends({}, props, {
      data: data
    }));
  };
};

exports.exampleHoc = exampleHoc;

//# sourceMappingURL=trackPromise.js.map