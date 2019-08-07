"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSelectedListDetails = exports.findAndReplaceItem = exports.findAndUpdateItem = exports.compareList = exports.toggleState = exports.filterItems = exports.filterIds = exports.toggle = exports.remove = exports.update = exports.clone = exports.add = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * returns new list removing/adding element
 * @param list
 * @param element
 * @return {...*[]}
 */
var toggle = function toggle(list, element) {
  var processedList = _toConsumableArray(list);

  var index = processedList.indexOf(element);

  if (index > -1) {
    processedList.splice(index, 1);
  } else {
    processedList.push(element);
  }

  return processedList;
};
/**
 * update the given item from list
 * @param dataList -> Parent Data List
 * @param data -> Data to be updated to parent list
 * @param replacementKeys -> data and dataList Keys.
 * @param primaryKey -> key to substitute
 * @return array
 */


exports.toggle = toggle;

var update = function update(dataList, data) {
  var replacementKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var primaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';

  var updatedDataList = _toConsumableArray(dataList);

  var index = updatedDataList.findIndex(function (element) {
    return element[primaryKey] === data[primaryKey];
  });

  if (index >= 0) {
    replacementKeys.forEach(function (key) {
      return updatedDataList[index][key] = data[key];
    }); // const newData = updatedDataList[index];
    // const updatedData = dummyCallBack(newData);
    // updatedDataList[index] = updatedData;
  }

  return updatedDataList;
};

exports.update = update;

var remove = function remove(dataList) {
  var selectedList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return dataList.filter(function (data) {
    return !selectedList.includes(data[attribute]);
  });
};

exports.remove = remove;

var add = function add(dataList, data) {
  dataList.push(data);
  return dataList;
};

exports.add = add;

var toggleState = function toggleState(dataList) {
  var selectedList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'status';
  var primaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  var index = dataList.findIndex(function (data) {
    return data[primaryKey] === selectedList[0];
  });
  dataList[index][attribute] = !dataList[index][attribute];
  return dataList;
};

exports.toggleState = toggleState;

var compareList = function compareList(list1, list2) {
  return JSON.stringify(list1) === JSON.stringify(list2);
};

exports.compareList = compareList;

var clone = function clone(list) {
  return JSON.parse(JSON.stringify(list));
};

exports.clone = clone;

var filterSelectedListDetails = function filterSelectedListDetails(dataList, selectedIds) {
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return dataList.filter(function (data) {
    return selectedIds.indexOf(data[attribute]) > -1;
  });
};

exports.filterSelectedListDetails = filterSelectedListDetails;

var filterItems = function filterItems(dataList, filterValue) {
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  return dataList.filter(function (data) {
    return data[attribute] === filterValue;
  });
};

exports.filterItems = filterItems;

var filterIds = function filterIds(dataList, filterValue) {
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var filterId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  return dataList.filter(function (data) {
    return data[attribute] === filterValue;
  }).map(function (item) {
    return item[filterId];
  });
};

exports.filterIds = filterIds;

var findAndReplaceItem = function findAndReplaceItem(dataList) {
  var replaceObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var attribute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var index = dataList.findIndex(function (data) {
    return data[attribute] === replaceObj[attribute];
  });

  if (index > -1) {
    dataList[index] = replaceObj;
  }

  return dataList;
};

exports.findAndReplaceItem = findAndReplaceItem;

var findAndUpdateItem = function findAndUpdateItem(list, value, updateKey, updateList) {
  var attribute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';

  var dataList = _toConsumableArray(list);

  var index = dataList.findIndex(function (data) {
    return data[attribute] === value;
  });

  if (index > -1) {
    dataList[index][updateKey] = updateList;
    return dataList;
  }

  return dataList;
};

exports.findAndUpdateItem = findAndUpdateItem;

//# sourceMappingURL=arrayProcessor.js.map