import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Menu from '../Menu';
import MonthPresentor from './MonthPresentor';
import MonthPickerStyled from './MonthPickerStyled';
import monthList from './data';

/**
 * @type {{onDialogCancel: shim, onDialogOkay: shim, name: shim, presentationType: shim}}
 */
const propTypes = {
  years: PropTypes.arrayOf([PropTypes.number]),
  value: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
  }),
  onSelect: PropTypes.func,
};

const defaultProps = {
  years: [2018, 2019, 2020, 2021],
  value: {
    year: 2019,
    month: 1,
  },
  onSelect: () => null,
};

const MONTH_PICKER_ICON = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

class MonthPicker extends Component {
  static propTypes = propTypes;
  
  static defaultProps = defaultProps;
  
  constructor (props) {
    super(props);
    this.state = {
      value: {
        year: props.value.year,
        month: props.value.month,
      },
      yearInPresentation: props.value.year,
    };
    
    this.reference = {
      monthPicker: React.createRef(),
    };
  }
  
  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
        yearInPresentation: nextProps.value.year,
      };
    }
    
    return nextProps;
  }
  
  onIconClick = (ICON) => {
    // propagate through the Year
    let { yearInPresentation } = this.state;
    const { years } = this.props;
    const indexInYears = years.indexOf(yearInPresentation);
    const maxYearIndex = years.length - 1;
    const minYearIndex = 0;
    
    if (ICON === MONTH_PICKER_ICON.RIGHT && indexInYears < maxYearIndex) {
      yearInPresentation += 1;
    }
    
    if (ICON === MONTH_PICKER_ICON.LEFT && indexInYears > minYearIndex) {
      yearInPresentation -= 1;
    }
    
    this.setState({ yearInPresentation });
  };
  
  onMonthPickerSelect = () => {
    const { onSelect } = this.props;
    const { value } = this.state;
    onSelect(value);
    
    this.reference.monthPicker.current.close();
  };
  
  onMonthClick = (month) => {
    const { value, yearInPresentation } = this.state;
    value.year = yearInPresentation;
    value.month = month.value.monthIndex;
    
    this.setState({ value }, () => this.onMonthPickerSelect(value));
  };
  
  render () {
    const { yearInPresentation, value } = this.state;
    const monthName = monthList.filter(month => month.id === value.month)[0].title;
    
    const header = (
      <div className="month-view">
        <span className="month-icon">Month</span>
        <span>{monthName} - {value.year}</span>
        <span className="ic-dropdown">*Dropdown</span>
      </div>
    );
    
    return (
      <MonthPickerStyled>
        <Menu header={header} ref={this.reference.monthPicker}>
          <div className="month-picker-wrap">
            <div className="month-picker-inner">
              <div className="month-picker-icon left"
                   onClick={() => this.onIconClick(MONTH_PICKER_ICON.LEFT)}>
                LEFT
              </div>
              <div className="bold">{yearInPresentation}</div>
              <div
                className="month-picker-icon right"
                onClick={() => this.onIconClick(MONTH_PICKER_ICON.RIGHT)}>
                RIGHT
              </div>
            </div>
            <MonthPresentor
              onMonthClick={this.onMonthClick}
              activeMonth={value.month}
              isPresentationYearActive={yearInPresentation === value.year}
            />
          </div>
        </Menu>
      </MonthPickerStyled>
    );
  }
}

export default MonthPicker;
