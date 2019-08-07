"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refValidator = exports.refGenerator = void 0;

var refGenerator = function refGenerator(list) {
  var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'this.';
  var obj = {};
  list.forEach(function (item) {
    return obj[item] = string + item;
  });
  return obj;
};

exports.refGenerator = refGenerator;

var refValidator = function refValidator(refList) {
  return Object.values(refList).every(function (reference) {
    return reference.getValidState() === true;
  });
};

exports.refValidator = refValidator;

//# sourceMappingURL=refGenerator.js.map