"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetFromPageAndLimit = exports.apiFilterProcessor = void 0;

var apiFilterProcessor = function apiFilterProcessor() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filters = [];
  Object.keys(filter).map(function (key) {
    if (filter[key].selectedIdList && filter[key].selectedIdList.length > 0) {
      var filterInput = {
        column: key,
        value: filter[key].selectedIdList.toString()
      };
      filters.push(filterInput);
    }
  });
  return filters;
};

exports.apiFilterProcessor = apiFilterProcessor;

var getOffsetFromPageAndLimit = function getOffsetFromPageAndLimit(page, limit) {
  return (page - 1) * limit;
};

exports.getOffsetFromPageAndLimit = getOffsetFromPageAndLimit;

//# sourceMappingURL=api.js.map