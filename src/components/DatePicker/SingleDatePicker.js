import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-date-range/lib/Calendar';
import Menu from '../Menu';
import * as dateUtil from '../../utils/date';
import SingleDatePickerStyled from './DatePickerStyled';

const propTypes = {
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  date: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  date: dateUtil.getStartOfCurrentMonth(),
};

class SingleDatePicker extends Component {
  // maintain separate state for user interaction;
  constructor(props) {
    super(props);

    this.reference = {
      date: React.createRef(),
    };
  }

  handleSelect = (selectedDate) => {
    const { onChange, name } = this.props;
    const date = dateUtil.normalPresentor(selectedDate);

    onChange(name, date);
    this.reference.date.current.close();
    // callback on date close
  };

  render() {
    const { date } = this.props;

    const dateHeader = (
      <div className="date-input">
        <div className="moment">
          {
            dateUtil.presentor(date)
          }
          <span className="ic-date-icon" />
        </div>
      </div>
    );

    return (
      <SingleDatePickerStyled>
        <div className="datepicker-wrapper">
          <Menu
            header={dateHeader}
            hideOnClick
            ref={this.reference.date}
          >
            <div className="datepicker-block">
              <Calendar
                showMonthAndYearPickers
                date={dateUtil.formatter(date)}
                onChange={
                  selectedDate => this.handleSelect(selectedDate)
                }
              />
            </div>
          </Menu>
        </div>
      </SingleDatePickerStyled>
    );
  }
}

SingleDatePicker.propTypes = propTypes;

SingleDatePicker.defaultProps = defaultProps;

export default SingleDatePicker;
