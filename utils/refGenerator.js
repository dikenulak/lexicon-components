const refGenerator = (list, string = 'this.') => {
  const obj = {};
  list.forEach(item => obj[item] = string + item);

  return obj;
};

const refValidator = refList => Object.values(refList).every(
  reference => reference.getValidState() === true,
);

export { refGenerator, refValidator };
