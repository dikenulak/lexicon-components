"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rosiaValidator = function rosiaValidator() {
  var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var argument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var inputType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var valueToString = value !== 0 ? value ? value.toString() : '' : value.toString();

  if (rule === '') {
    switch (inputType) {
      case 'email':
        return _validator.default.isEmail(valueToString);

      case 'number':
        return _validator.default.isNumeric(valueToString);

      case 'text':
        return !_validator.default.isEmpty(valueToString);

      default:
        return !_validator.default.isEmpty(valueToString);
    }
  } // return false;


  return _validator.default[rule](valueToString, argument);
};

var _default = rosiaValidator;
exports.default = _default;

//# sourceMappingURL=validator.js.map