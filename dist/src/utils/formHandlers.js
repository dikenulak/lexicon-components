"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownChange = exports.inputChange = void 0;

var _objectProcessor = require("./objectProcessor");

var inputChange = function inputChange(data, event) {
  var firstParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var paramList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var details = (0, _objectProcessor.clone)(data);

  if (!firstParam) {
    details[event.target.name] = event.formattedValue;
    return details;
  }

  if (paramList.length === 0) {
    details[firstParam][event.target.name] = event.formattedValue;
    return details;
  }

  var updatedDetails = (0, _objectProcessor.updateObjectAttribute)(details, paramList, event.formattedValue);
  return updatedDetails;
};

exports.inputChange = inputChange;

var dropdownChange = function dropdownChange(data, parameterRef, value) {
  var details = (0, _objectProcessor.updateObjectAttribute)((0, _objectProcessor.clone)(data), parameterRef, value);
  return details;
};

exports.dropdownChange = dropdownChange;

//# sourceMappingURL=formHandlers.js.map