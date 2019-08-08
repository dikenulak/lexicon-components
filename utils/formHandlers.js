import { clone, updateObjectAttribute } from './objectProcessor';

const inputChange = (data, event, firstParam = '', paramList = []) => {
  const details = clone(data);
  if (!firstParam) {
    details[event.target.name] = event.formattedValue;

    return details;
  } if (paramList.length === 0) {
    details[firstParam][event.target.name] = event.formattedValue;

    return details;
  }
  const updatedDetails = updateObjectAttribute(details, paramList, event.formattedValue);

  return updatedDetails;
};

const dropdownChange = (data, parameterRef, value) => {
  const details = updateObjectAttribute(clone(data), parameterRef, value);

  return details;
};

export { inputChange, dropdownChange };
