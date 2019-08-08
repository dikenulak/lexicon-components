const apiFilterProcessor = (filter = {}) => {
  const filters = [];

  Object.keys(filter)
    .map((key) => {
      if (filter[key].selectedIdList && filter[key].selectedIdList.length > 0) {
        const filterInput = {
          column: key,
          value: filter[key].selectedIdList.toString(),
        };

        filters.push(filterInput);
      }
    });

  return filters;
};

const getOffsetFromPageAndLimit = (page, limit) => (page - 1) * limit;

export { apiFilterProcessor, getOffsetFromPageAndLimit };
