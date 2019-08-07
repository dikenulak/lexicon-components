"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatStrings = void 0;

var concatStrings = function concatStrings(list) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var computedString = '';

  for (var count in list) {
    computedString = computedString.concat(list[count], seperator);
  }

  return computedString;
};

exports.concatStrings = concatStrings;

//# sourceMappingURL=stringProcessor.js.map