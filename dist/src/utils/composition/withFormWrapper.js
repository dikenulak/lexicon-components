"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withFormWrapper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _objectPrototypes = require("../objectPrototypes");

var _component = require("./component");

var _config = require("../../data/enums/config");

var _arrayProcessor = require("../arrayProcessor");

var _formHandlers = require("../formHandlers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// assumed each mapper is mounted on every change.
// it mapper config change directly w/o mounting use derive state from props.
function withFormWrapper(SourceComponent) {
  var propTypes = {
    type: _propTypes.default.string,
    onDialogSubmit: _propTypes.default.func,
    onDialogCancel: _propTypes.default.func,
    dialogElement: _propTypes.default.instanceOf(Object),
    renderDialog: _propTypes.default.func.isRequired,
    formConfig: _propTypes.default.shape({
      title: _propTypes.default.string,
      mapper: _propTypes.default.func,
      refsObj: _propTypes.default.instanceOf(Object),
      validationRequired: _propTypes.default.bool
    })
  };
  var defaultProps = {
    type: '',
    onDialogSubmit: function onDialogSubmit() {
      return null;
    },
    onDialogCancel: function onDialogCancel() {
      return null;
    },
    dialogElement: {},
    formConfig: _propTypes.default.shape({
      mapper: function mapper() {
        return null;
      },
      title: '',
      refsObj: {},
      validationRequired: _propTypes.default.bool
    })
  };

  var FormWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FormWrapper, _Component);

    function FormWrapper(props) {
      var _this;

      _classCallCheck(this, FormWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormWrapper).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "getFormValidationStatus", function () {
        var refsObj = _this.props.formConfig.refsObj;
        return !Object.values(refsObj).find(function (item) {
          if (typeof item !== 'string') return item.getValidState() === false;
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function () {
        var _this$props = _this.props,
            onDialogSubmit = _this$props.onDialogSubmit,
            type = _this$props.type,
            onDialogCancel = _this$props.onDialogCancel;
        var details = _this.state.details;

        var valid = _this.getFormValidationStatus();

        if (valid) {
          onDialogSubmit(type, details);
          onDialogCancel();
        } else {
          _this.setState({
            enableErrorDisplay: true
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
        var firstParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var paramList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var details = _this.state.details;
        var updatedDetails = (0, _formHandlers.inputChange)(details, event, firstParam, paramList);

        _this.setState({
          details: updatedDetails
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleDropDownChange", function (value) {
        var parameterRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
          return null;
        };
        var details = _this.state.details;
        var updatedDetails = (0, _formHandlers.dropdownChange)(details, parameterRef, value);

        _this.setState({
          details: updatedDetails
        }, function () {
          callBack(parameterRef[parameterRef.length - 1], value, (0, _arrayProcessor.clone)(_this.state.details), _this.updateState);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "updateState", function (details) {
        _this.setState({
          details: details
        });
      });

      _defineProperty(_assertThisInitialized(_this), "getState", function () {
        var details = _this.state.details;
        return (0, _arrayProcessor.clone)(details);
      });

      _defineProperty(_assertThisInitialized(_this), "handleFileUpload", function (e) {
        var details = _this.state.details;
        details.file = e.target.files[0];

        _this.setState({
          details: details
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleMultipleUpload", function (e, uploadCallBack) {
        var details = _this.state.details;
        uploadCallBack(e.target.files[0], (0, _arrayProcessor.clone)(details), _this.updateState);
      });

      var formConfig = props.formConfig,
          dialogElement = props.dialogElement;
      _this.state = {
        dialogElementBackup: props.dialogElement,
        details: _objectPrototypes.has.call(formConfig, _config.FORM_CONFIG.MAPPER) ? formConfig[_config.FORM_CONFIG.MAPPER](dialogElement) : {},
        enableErrorDisplay: false
      };
      return _this;
    }

    _createClass(FormWrapper, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            details = _this$state.details,
            enableErrorDisplay = _this$state.enableErrorDisplay;
        var handleInputChange = this.handleInputChange,
            handleDropDownChange = this.handleDropDownChange,
            handleFileUpload = this.handleFileUpload,
            getFormValidationStatus = this.getFormValidationStatus,
            handleFormSubmit = this.handleFormSubmit,
            handleMultipleUpload = this.handleMultipleUpload,
            updateState = this.updateState,
            getState = this.getState;

        var newProps = _objectSpread({
          handleInputChange: handleInputChange,
          handleDropDownChange: handleDropDownChange,
          handleFileUpload: handleFileUpload,
          getFormValidationStatus: getFormValidationStatus,
          dialogData: details,
          enableErrorDisplay: enableErrorDisplay,
          handleFormSubmit: handleFormSubmit,
          handleMultipleUpload: handleMultipleUpload,
          updateState: updateState,
          getState: getState
        }, this.props);

        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(SourceComponent, newProps));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var dialogElementBackup = prevState.dialogElementBackup;
        var dialogElement = nextProps.dialogElement,
            formConfig = nextProps.formConfig;

        if (!(0, _arrayProcessor.compareList)(dialogElement, dialogElementBackup)) {
          return {
            dialogElementBackup: dialogElement,
            details: _objectPrototypes.has.call(formConfig, _config.FORM_CONFIG.MAPPER) ? formConfig[_config.FORM_CONFIG.MAPPER](dialogElement) : {}
          };
        }

        return null;
      }
    }]);

    return FormWrapper;
  }(_react.Component);

  FormWrapper.displayName = "withAlert(".concat((0, _component.getDisplayName)(SourceComponent), ")");
  FormWrapper.propTypes = propTypes;
  FormWrapper.defaultProps = defaultProps;
  return FormWrapper;
}

//# sourceMappingURL=withFormWrapper.js.map