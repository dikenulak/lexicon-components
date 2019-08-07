import React from 'react';
import PropTypes from 'prop-types';
import { monthList as defaultMonthList } from './data';
import MonthPickerStyled from './MonthPickerStyled';

const propTypes = {
  onMonthClick: PropTypes.func,
  monthList: PropTypes.array,
  isPresentationYearActive: PropTypes.bool,
  activeMonth: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  activeMonth: 1,
  onMonthClick: () => null,
  monthList: defaultMonthList,
  isPresentationYearActive: false,
};

const getMonthList = (months, activeMonth, isPresentationYearActive, onClick, columnWidth = 4) => {
  const numberOfMonths = 12;

  const rowList = [
    ...Array(numberOfMonths / columnWidth)
      .keys(),
  ];

  const columnList = [
    ...Array(columnWidth)
      .keys(),
  ];

  return rowList.map((rowElement, rowIndex) => (
    <div className="month-date-list-wrap">
      {
        columnList.map((columnElement, columnIndex) => (
          <div
            onClick={() => onClick(months[rowIndex * columnWidth + columnIndex])}
            className={
              isPresentationYearActive
              && activeMonth === months[rowIndex * columnWidth + columnIndex].value.monthIndex
                ? 'active month-date-list' : 'inactive month-date-list'
            }
          >
            {(months[rowIndex * columnWidth + columnIndex].title)}
          </div>
        ))
      }
    </div>));
};

const MonthPresentor = ({ ...props }) => {
  const {
    monthList,
    onMonthClick,
    activeMonth,
    isPresentationYearActive,
  } = props;
  return (
    <div style={{padding: '5px 16px'}}>
      {getMonthList(monthList, activeMonth, isPresentationYearActive, onMonthClick)}
    </div>
  );
};

MonthPresentor.propTypes = propTypes;

MonthPresentor.defaultProps = defaultProps;

export default MonthPresentor;
