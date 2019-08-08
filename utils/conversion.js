const fixedFloat = (item, digits = 2) => {
  if (item) {
    return (Number(Number(item)
      .toFixed(digits)));
  }
  return item;
};

const fixedFloatAndCommas = (item, maxDigit = 2, minDigit = 0) => (
  item ? item.toLocaleString(undefined, {
    maximumFractionDigits: maxDigit,
    minimumFractionDigits: minDigit,
  }) : item);

const numberPresentor = fixedFloatAndCommas;

export { fixedFloat, fixedFloatAndCommas, numberPresentor };
