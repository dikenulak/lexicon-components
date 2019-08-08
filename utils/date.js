import moment from 'moment';

const getStartOfCurrentMonth = () => moment()
  .startOf('month')
  .format('DD MMM YYYY');

const getEndOfCurrentMonth = () => moment()
  .endOf('month')
  .format('DD MMM YYYY');

const getP3MStartDay = () => moment()
  .subtract(3, 'months')
  .format('DD MMM YYYY');

const getP6MStartDay = () => moment()
  .subtract(6, 'months')
  .format('DD MMM YYYY');

const getCurrentDay = () => moment()
  .format('DD MMM YYYY');

const getYesterDay = () => moment()
  .subtract(1, 'day');

const getStartOfCurrentYear = () => moment()
  .startOf('year')
  .format('DD MMM YYYY');

const presentor = date => moment(date)
  .format('D MMM YYYY');

const normalPresentor = date => moment(date)
  .format('DD MMM YYYY');

const formatter = date => moment(date);

/** converts date obj to YYYY-MM-DD */
const getTodaysDate = () => (new Date().toISOString()
  .slice(0, 10));

export {
  formatter,
  presentor,
  getTodaysDate,
  getCurrentDay,
  getP3MStartDay,
  getP6MStartDay,
  normalPresentor,
  getStartOfCurrentYear,
  getStartOfCurrentMonth,
  getEndOfCurrentMonth,
  getYesterDay,
};
