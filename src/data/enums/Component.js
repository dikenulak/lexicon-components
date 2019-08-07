import PropTypes from 'prop-types';

const paginationProps = {
  value: PropTypes.shape({
    page: PropTypes.number,
    limit: PropTypes.number,
  }),
  defaultValue: {
    page: 1,
    limit: 50,
  },
};

const dataProps = {
  value: PropTypes.shape({
    list: PropTypes.array,
    total: PropTypes.number,
  }),
  defaultValue: {
    list: [],
    total: 0,
  },
};

const serverResponse = {
  waiting: {
    props: PropTypes.bool,
    defaultProps: false,
  },
  error: {
    props: PropTypes.string,
    defaultProps: '',
  },
};

const onPageChangeProps = {
  value: PropTypes.func,
  defaultValue: () => null,
};

const onCheckBoxClickProps = {
  value: PropTypes.func,
  defaultValue: () => null,
};

const onIconClickProps = {
  value: PropTypes.func,
  defaultValue: () => null,
};

const state = {
  pagination: paginationProps.defaultValue,
  data: dataProps.defaultValue,
};

export {
  paginationProps, dataProps, serverResponse, state, onCheckBoxClickProps, onIconClickProps,
};
