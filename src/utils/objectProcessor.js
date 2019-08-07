const updateObjectAttribute = (object, parameterList, newAttributeValue) => {
  parameterList.reduce((acc, value, index, list) => {
    if (index === list.length - 1) {
      acc[value] = newAttributeValue;
    }

    return acc[value];
  }, object);

  return object;
};

const clone = list => JSON.parse(JSON.stringify(list));

export { updateObjectAttribute, clone };
