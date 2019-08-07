import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-date-range/lib/Calendar';
import Menu from '../Menu';
import DateToRender from './DateToRender';
import * as dateUtil from '../../utils/date';
import DateStringPicker from './DateStringPicker';
import DatePickerStyled from './DatePickerStyled';
import { Button } from '../index';

const propTypes = {
  date: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

class DatePicker extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    /** if (
     nextProps.date.start !== prevState.date.start
     || nextProps.date.end !== prevState.date.end
     ) {
      return { date: nextProps.date };
    } */

    return { date: nextProps.date };
  }

  // maintain separate state for user interaction;
  constructor(props) {
    super(props);

    this.state = {
      date: {
        start: props.date.start || dateUtil.getStartOfCurrentMonth(),
        end: props.date.end || dateUtil.getCurrentDay(),
      },
    };

    this.reference = {
      startDatePicker: React.createRef(),
      endDatePicker: React.createRef(),
    };
  }

  handleApplyClick = () => {
    const { date } = this.state;
    const { onChange } = this.props;
    onChange('date', date);
  };

  handleSelect = (selectedDate, label) => {
    const { date } = this.state;
    const formattedDate = { ...date };
    formattedDate[label] = dateUtil.normalPresentor({ ...selectedDate });
    date.start = formattedDate.start;
    date.end = formattedDate.end;

    this.setState({ date });
    this.reference.startDatePicker.current.close();
    this.reference.endDatePicker.current.close();
  };

  onDateStringClick = (value) => {
    const dateReplica = { ...value };
    const { date } = this.state;
    date.start = dateReplica.start;
    date.end = dateReplica.end;

    this.setState({ date }, () => {
      this.onDateRangeChange();
    });
  };

  onDateRangeChange = () => {
    const { onChange } = this.props;
    const { date } = this.state;
    onChange('date', date);
  };

  render() {
    const { date } = this.state;

    const header = (
      <div className="datepicker-content">
        <span className="psr-icons date">Date</span>
        <DateToRender date={date} />
      </div>
    );

    const startDate = (
      <div className="date-input">
        <span className="text">From</span>
        <div className="moment">
          {
            dateUtil.presentor(date.start)
          }
          <span className="ic-date-icon" />
        </div>
      </div>
    );

    const endDate = (
      <div className="date-input">
        <span className="text">To</span>
        <div className="moment">
          {
            dateUtil.presentor(date.end)
          }
          <span className="ic-date-icon" />
        </div>
      </div>
    );

    return (
      <DatePickerStyled>
        <div className="datepicker-wrapper">
          <Menu header={header}>
            <div className="datepicker-block">
              <DateStringPicker onClick={this.onDateStringClick} date={date} />
              <div className="date-input-wrap">
                <Menu
                  header={startDate}
                  hideOnClick
                  ref={this.reference.startDatePicker}
                >
                  <Calendar
                    showMonthAndYearPickers
                    date={dateUtil.formatter(date.start)}
                    maxDate={dateUtil.formatter(date.end)}
                    onChange={
                      selectedDate => this.handleSelect(selectedDate, 'start')
                    }
                  />
                </Menu>
                <Menu
                  header={endDate}
                  hideOnClick
                  ref={this.reference.endDatePicker}
                >
                  <Calendar
                    showMonthAndYearPickers
                    date={dateUtil.formatter(date.end)}
                    minDate={dateUtil.formatter(date.start)}
                    onChange={
                      selectedDate => this.handleSelect(selectedDate, 'end')
                    }
                  />
                </Menu>
              </div>
              <div className="filter-button-wrap">
                <Button
                  primary
                  onClick={() => this.handleApplyClick()}
                >
                  Apply
                </Button>
              </div>
            </div>
          </Menu>
        </div>
      </DatePickerStyled>
    );
  }
}

DatePicker.propTypes = propTypes;

export default DatePicker;
