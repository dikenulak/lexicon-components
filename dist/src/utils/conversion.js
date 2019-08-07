"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberPresentor = exports.fixedFloatAndCommas = exports.fixedFloat = void 0;

var fixedFloat = function fixedFloat(item) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (item) {
    return Number(Number(item).toFixed(digits));
  }

  return item;
};

exports.fixedFloat = fixedFloat;

var fixedFloatAndCommas = function fixedFloatAndCommas(item) {
  var maxDigit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var minDigit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return item ? item.toLocaleString(undefined, {
    maximumFractionDigits: maxDigit,
    minimumFractionDigits: minDigit
  }) : item;
};

exports.fixedFloatAndCommas = fixedFloatAndCommas;
var numberPresentor = fixedFloatAndCommas;
exports.numberPresentor = numberPresentor;

//# sourceMappingURL=conversion.js.map