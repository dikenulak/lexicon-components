const concatStrings = (list, seperator = '') => {
  let computedString = '';
  for (const count in list) {
    computedString = computedString.concat(list[count], seperator);
  }
  return computedString;
};

export { concatStrings };
