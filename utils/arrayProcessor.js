/**
 * returns new list removing/adding element
 * @param list
 * @param element
 * @return {...*[]}
 */
const toggle = (list, element) => {
  const processedList = [...list];
  const index = processedList.indexOf(element);
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
const update = (dataList, data, replacementKeys = [], primaryKey = 'id') => {
  const updatedDataList = [...dataList];
  const index = updatedDataList.findIndex(element => element[primaryKey] === data[primaryKey]);
  if (index >= 0) {
    replacementKeys.forEach(key => updatedDataList[index][key] = data[key]);
    // const newData = updatedDataList[index];
    // const updatedData = dummyCallBack(newData);
    // updatedDataList[index] = updatedData;
  }

  return updatedDataList;
};

const remove = (dataList, selectedList = [], attribute = 'id') => dataList.filter(data => !selectedList.includes(data[attribute]));

const add = (dataList, data) => {
  dataList.push(data);

  return dataList;
};

const toggleState = (dataList, selectedList = [], attribute = 'status', primaryKey = 'id') => {
  const index = dataList.findIndex(data => data[primaryKey] === selectedList[0]);
  dataList[index][attribute] = !dataList[index][attribute];

  return dataList;
};

const compareList = (list1, list2) => (JSON.stringify(list1) === JSON.stringify(list2));

const clone = list => JSON.parse(JSON.stringify(list));

const filterSelectedListDetails = (dataList, selectedIds, attribute = 'id') => (dataList.filter(
  data => (selectedIds.indexOf(data[attribute]) > -1)
));

const filterItems = (dataList, filterValue, attribute = 'id') => dataList.filter(data => data[attribute] === filterValue);
const filterIds = (dataList, filterValue, attribute = 'id', filterId = 'id') => (
  dataList.filter(data => data[attribute] === filterValue)
    .map(item => item[filterId])
);

const findAndReplaceItem = (dataList, replaceObj = {}, attribute = 'id') => {
  const index = dataList.findIndex(data => (data[attribute] === replaceObj[attribute]));
  if (index > -1) {
    dataList[index] = replaceObj;
  }
  return dataList;
};

const findAndUpdateItem = (list, value, updateKey, updateList, attribute = 'id') => {
  const dataList = [...list];
  const index = dataList.findIndex(data => (data[attribute] === value));
  if (index > -1) {
    dataList[index][updateKey] = updateList;
    return dataList;
  }
  return dataList;
};

export {
  add,
  clone,
  update,
  remove,
  toggle,
  filterIds,
  filterItems,
  toggleState,
  compareList,
  findAndUpdateItem,
  findAndReplaceItem,
  filterSelectedListDetails,
};
