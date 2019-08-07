import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import * as dateUtils from '../../utils/date';

const propTypes = {
  date: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const configuration = [
  {
    id: 1,
    title: 'Today',
    date: {
      start: dateUtils.getCurrentDay(),
      end: dateUtils.getCurrentDay(),
    },
  },
  {
    id: 2,
    title: 'MTD',
    date: {
      start: dateUtils.getStartOfCurrentMonth(),
      end: dateUtils.getCurrentDay(),
    },
  },
  {
    id: 3,
    title: 'P3M',
    date: {
      start: dateUtils.getP3MStartDay(),
      end: dateUtils.getCurrentDay(),
    },
  },
  {
    id: 4,
    title: 'P6M',
    date: {
      start: dateUtils.getP6MStartDay(),
      end: dateUtils.getCurrentDay(),
    },
  },
  {
    id: 5,
    title: 'YTD',
    date: {
      start: dateUtils.getStartOfCurrentYear(),
      end: dateUtils.getCurrentDay(),
    },
  },
];

class DateStringPicker extends Component {

  onDateComponentClick = (item) => {
    const newObject = Object.assign({}, item);
    const { onClick } = this.props;
    onClick(newObject.date);
  };

  checkIfActive = (item) => {
    const { date } = this.props;

    return date.start === item.date.start && date.end === item.date.end;
  };

  render() {

    return (
      <DateStringPickerStyled>
        <div className="d-flex-space-between">
          {
            configuration.map(item => (
              <div
                className={
                  this.checkIfActive(item) ? 'date-item is-active' : 'date-item'
                }
                onClick={() => this.onDateComponentClick(item)}
              >
                {item.title}
              </div>
            ))}
        </div>
      </DateStringPickerStyled>
    );
  }
}

/**
 * @type {{onDialogCancel: shim, onDialogOkay: shim, name: shim, presentationType: shim}}
 */
DateStringPicker.propTypes = propTypes;

const DateStringPickerStyled = styled.div`
.d-flex-space-between {
  display: flex;
  justify-content: space-between;
}

.date-item {
  margin: 0 !important;
  flex: 1;
  padding: 6px 12px;
  background-color: #f6f6f6;
  border: 1px solid #cdced9;
  border-left-color: transparent;
  color: #a7a9bc;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover, &:focus {
    background: #ececec;
    transition: all 0.25s ease-in-out;
  }
}
.date-item:first-child {
  border-left-color: #cdced9;
  border-radius: 4px 0 0 4px;
}

.date-item:last-child {
  border-radius: 0 4px 4px 0;
}

.date-item.is-active {
  color: #272833;
  background: #cdced9;
}
`;

export default DateStringPicker;
