"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = exports.updateObjectAttribute = void 0;

var updateObjectAttribute = function updateObjectAttribute(object, parameterList, newAttributeValue) {
  parameterList.reduce(function (acc, value, index, list) {
    if (index === list.length - 1) {
      acc[value] = newAttributeValue;
    }

    return acc[value];
  }, object);
  return object;
};

exports.updateObjectAttribute = updateObjectAttribute;

var clone = function clone(list) {
  return JSON.parse(JSON.stringify(list));
};

exports.clone = clone;

//# sourceMappingURL=objectProcessor.js.map