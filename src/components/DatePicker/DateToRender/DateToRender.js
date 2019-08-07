import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateToRender = ({ date }) => {
  const startDate = moment(date.start);
  const endDate = moment(date.end);
  const today = moment(new Date());
  let dateToRender = '';
  if (startDate.isSame(endDate)) {
    if (startDate.year() == today.year() && startDate.month() == today.month() && startDate.day() == today.day()) {
      dateToRender = <span style={{
        display: 'flex',
        alignItems: 'center'
      }}> Today <span className="ic-dropdown">*Dropdown</span></span>;
    } else if (startDate.year() == today.year()) {
      dateToRender = <span style={{
        display: 'flex',
        alignItems: 'center'
      }}> {startDate.format('D MMM')}
        <span className="ic-dropdown">*Dropdown</span> </span>;
    } else {
      dateToRender = <span style={{
        display: 'flex',
        alignItems: 'center'
      }}> {startDate.format('D MMM YYYY')}
        <span className="ic-dropdown">*Dropdown</span> </span>;
    }
  } else if (startDate.year() == endDate.year() && endDate.year() == today.year()) {
    dateToRender = <span style={{
      display: 'flex',
      alignItems: 'center'
    }}> {startDate.format('D MMM')} - {endDate.format('D MMM')}
      <span className="ic-dropdown">*Dropdown</span> </span>;
  } else {
    dateToRender = <span style={{
      display: 'flex',
      alignItems: 'center'
    }}> {startDate.format('D MMM YYYY')} - {endDate.format('D MMM YYYY')}
      <span className="ic-dropdown">*Dropdown</span> </span>;
  }
  return dateToRender;
};

DateToRender.propTypes = {
  date: PropTypes.object.isRequired,
};

export default DateToRender;
