import validator from 'validator';

const rosiaValidator = (rule = null, argument = {}, inputType = 'text', value = '') => {
  const valueToString =  value !== 0 ? value ? value.toString() : '' : value.toString();
  if (rule === '') {
    switch (inputType) {
      case 'email':
        return validator.isEmail(valueToString);
      case 'number':
        return validator.isNumeric(valueToString);
      case 'text':
        return !validator.isEmpty(valueToString);
      default:
        return !validator.isEmpty(valueToString);
    }
  }
  // return false;
  return validator[rule](valueToString, argument);
};

export default rosiaValidator;
