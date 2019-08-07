"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withAlert;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _component = require("./component");

var _Alert = _interopRequireDefault(require("../../components/Alert/Alert"));

var _AlertType = require("../../data/enums/AlertType");

var _config;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var config = (_config = {}, _defineProperty(_config, _AlertType.ALERT_TYPE.SUCCESS, {
  timeout: 5000,
  title: 'Success',
  iconName: 'check-circle-full'
}), _defineProperty(_config, _AlertType.ALERT_TYPE.DANGER, {
  timeout: 5000,
  title: 'Danger',
  iconName: 'exclamation-full'
}), _defineProperty(_config, _AlertType.ALERT_TYPE.INFO, {
  timeout: 4000,
  title: 'Info',
  iconName: 'info-circle'
}), _defineProperty(_config, _AlertType.ALERT_TYPE.WARNING, {
  timeout: 2000,
  title: 'Warning',
  iconName: 'warning-full'
}), _config);

function withAlert() {
  return function (SourceComponent) {
    var AlertBase =
    /*#__PURE__*/
    function (_Component) {
      _inherits(AlertBase, _Component);

      function AlertBase(props) {
        var _this;

        _classCallCheck(this, AlertBase);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AlertBase).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "handleAlertChange", function () {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _AlertType.ALERT_TYPE.INFO;
          var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'This is a general information';
          var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
            return null;
          };

          _this.setState({
            show: true,
            type: type,
            message: message
          }, function () {
            setTimeout(function () {
              callBack();
            }, 1000);

            _this.attachTimeOut();
          });
        });

        _defineProperty(_assertThisInitialized(_this), "attachTimeOut", function () {
          var type = _this.state.type;

          var self = _assertThisInitialized(_this);

          setTimeout(function () {
            if (self.state.show) {
              _this.resetAlert();
            }
          }, config[type].timeout);
        });

        _defineProperty(_assertThisInitialized(_this), "resetAlert", function () {
          _this.setState({
            show: false,
            type: _AlertType.ALERT_TYPE.INFO,
            message: ''
          });
        });

        _this.state = {
          show: false,
          type: _AlertType.ALERT_TYPE.INFO,
          message: ''
        };
        return _this;
      }

      _createClass(AlertBase, [{
        key: "render",
        value: function render() {
          var _this$state = this.state,
              show = _this$state.show,
              type = _this$state.type,
              message = _this$state.message;

          var oldProps = _extends({}, this.props);

          var newProps = {
            displayAlert: this.handleAlertChange
          };
          return _react.default.createElement(_react.Fragment, null, _react.default.createElement(SourceComponent, _extends({}, oldProps, newProps)), _react.default.createElement(_react.Fragment, null, show && _react.default.createElement(AlertPosition, null, _react.default.createElement(_Alert.default, {
            type: type,
            active: show,
            onChange: this.resetAlert,
            iconName: config[type].iconName,
            title: config[type].title
          }, message))));
        }
      }]);

      return AlertBase;
    }(_react.Component);

    AlertBase.displayName = "withAlert(".concat((0, _component.getDisplayName)(SourceComponent), ")");
    return AlertBase;
  };
}

var AlertPosition = _styledComponents.default.div(_templateObject());

//# sourceMappingURL=withAlert.js.map