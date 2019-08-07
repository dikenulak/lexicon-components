"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYesterDay = exports.getEndOfCurrentMonth = exports.getStartOfCurrentMonth = exports.getStartOfCurrentYear = exports.normalPresentor = exports.getP6MStartDay = exports.getP3MStartDay = exports.getCurrentDay = exports.getTodaysDate = exports.presentor = exports.formatter = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStartOfCurrentMonth = function getStartOfCurrentMonth() {
  return (0, _moment.default)().startOf('month').format('DD MMM YYYY');
};

exports.getStartOfCurrentMonth = getStartOfCurrentMonth;

var getEndOfCurrentMonth = function getEndOfCurrentMonth() {
  return (0, _moment.default)().endOf('month').format('DD MMM YYYY');
};

exports.getEndOfCurrentMonth = getEndOfCurrentMonth;

var getP3MStartDay = function getP3MStartDay() {
  return (0, _moment.default)().subtract(3, 'months').format('DD MMM YYYY');
};

exports.getP3MStartDay = getP3MStartDay;

var getP6MStartDay = function getP6MStartDay() {
  return (0, _moment.default)().subtract(6, 'months').format('DD MMM YYYY');
};

exports.getP6MStartDay = getP6MStartDay;

var getCurrentDay = function getCurrentDay() {
  return (0, _moment.default)().format('DD MMM YYYY');
};

exports.getCurrentDay = getCurrentDay;

var getYesterDay = function getYesterDay() {
  return (0, _moment.default)().subtract(1, 'day');
};

exports.getYesterDay = getYesterDay;

var getStartOfCurrentYear = function getStartOfCurrentYear() {
  return (0, _moment.default)().startOf('year').format('DD MMM YYYY');
};

exports.getStartOfCurrentYear = getStartOfCurrentYear;

var presentor = function presentor(date) {
  return (0, _moment.default)(date).format('D MMM YYYY');
};

exports.presentor = presentor;

var normalPresentor = function normalPresentor(date) {
  return (0, _moment.default)(date).format('DD MMM YYYY');
};

exports.normalPresentor = normalPresentor;

var formatter = function formatter(date) {
  return (0, _moment.default)(date);
};
/** converts date obj to YYYY-MM-DD */


exports.formatter = formatter;

var getTodaysDate = function getTodaysDate() {
  return new Date().toISOString().slice(0, 10);
};

exports.getTodaysDate = getTodaysDate;

//# sourceMappingURL=date.js.map