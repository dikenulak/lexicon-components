"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProperty = exports.isObjectEmpty = exports.getFilter = exports.objectToSortedArray = exports.has = void 0;

var _orderBy = _interopRequireDefault(require("lodash/orderBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var has = Object.prototype.hasOwnProperty;
exports.has = has;

var objectToArrayConverter = function objectToArrayConverter(object) {
  return Object.keys(object).map(function (attribute) {
    return object[attribute];
  });
};

var objectToSortedArray = function objectToSortedArray(object) {
  var sortingLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'title';
  var arrayList = objectToArrayConverter(object);
  return (0, _orderBy.default)(arrayList, sortingLabel);
};

exports.objectToSortedArray = objectToSortedArray;

var isObjectEmpty = function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}; // const filterGroups = ['asm', 'stl', 'dse', 'channel', 'category'];


exports.isObjectEmpty = isObjectEmpty;

var removeProperty = function removeProperty(obj, propertyName) {
  var _ = obj[propertyName],
      result = _objectWithoutProperties(obj, [propertyName].map(_toPropertyKey));

  return result;
};

exports.removeProperty = removeProperty;
var config = {
  userOption: {
    title: '',
    label: 'userOption',
    selectedItemList: [],
    selectedIdList: [],
    index: 0,
    value: 'user_option',
    active: false
  },
  period: {
    title: 'Period',
    label: 'period',
    selectedItemList: [],
    selectedIdList: [],
    value: 'period_id',
    index: 0,
    active: false
  },
  sub_d: {
    title: 'Sub-D',
    label: 'sub_d',
    selectedItemList: [],
    selectedIdList: [],
    value: 'distributor_id',
    index: 0,
    active: false
  },
  channel: {
    title: 'Channel',
    label: 'channel',
    selectedItemList: [],
    selectedIdList: [],
    value: 'channel_id',
    index: 0,
    active: false
  },
  category: {
    title: 'Category',
    label: 'category',
    selectedItemList: [],
    selectedIdList: [],
    value: 'category_id',
    index: 0,
    active: false
  },
  brand: {
    title: 'Brand',
    label: 'brand',
    selectedItemList: [],
    selectedIdList: [],
    value: 'brand_id',
    index: 0,
    active: false
  },
  asm: {
    title: 'ASM',
    label: 'asm',
    selectedItemList: [],
    selectedIdList: [],
    value: 'asm_id',
    index: 0,
    active: false
  },
  stl: {
    title: 'STL',
    label: 'stl',
    selectedItemList: [],
    selectedIdList: [],
    value: 'stl_id',
    index: 0,
    active: false
  },
  dse: {
    title: 'DSE',
    label: 'dse',
    selectedItemList: [],
    selectedIdList: [],
    value: 'dse_id',
    index: 0,
    active: false
  },
  sub_brand: {
    title: 'Sub Brand',
    label: 'sub_brand',
    selectedItemList: [],
    selectedIdList: [],
    value: 'sub_brand_id',
    index: 0,
    active: false
  },
  market_catalog: {
    title: 'Market Catalog',
    label: 'market_catalog',
    selectedItemList: [],
    selectedIdList: [],
    value: 'market_catalog_id',
    index: 0,
    active: false
  },
  sku: {
    title: 'SKU',
    label: 'sku',
    selectedItemList: [],
    selectedIdList: [],
    value: 'sku_id',
    index: 0,
    active: false
  },
  product_group: {
    title: 'Product Group',
    label: 'product_group',
    selectedItemList: [],
    selectedIdList: [],
    value: 'product_group_id',
    index: 0,
    active: false
  },
  call_status: {
    title: 'Call Status',
    label: 'call_status',
    selectedItemList: [],
    selectedIdList: [],
    value: 'call_status_id',
    index: 0,
    active: false
  }
};

var getFilter = function getFilter(filterGroups) {
  var filterConfig = {};

  for (var count = 0; count < filterGroups.length; count += 1) {
    var labelName = filterGroups[count];

    if (config[labelName]) {
      filterConfig[labelName] = config[labelName];
    }
  }

  return filterConfig;
};

exports.getFilter = getFilter;

//# sourceMappingURL=objectPrototypes.js.map