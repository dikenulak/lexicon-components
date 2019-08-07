import styled from 'styled-components';

const DatePickerStyled = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 16px;
  
  .filter-background {
    background: rgb(247, 248, 249);
    border-radius: 4px;
  }
  
  .datepicker-content {
    background: transparent;
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 4px;
  
    &.active {
      background: #f0f5ff;
    }
    
    .psr-icons {
      background-image: url(/image/icons/ic_calendar.png);
      background-size: 16px;
      width: 16px;
      height: 16px;
      text-indent: -999px;
      display: inline-block;
      margin-right: 8px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center center;
      overflow: hidden;
  }
    
    .ic-dropdown {
      width: 20px;
      height: 20px;
      text-indent: -9999px;
      display: inline-block;
      overflow: hidden;
      transform: rotate(90deg);
      background: url(/image/icons/ic_dropdown.svg) center center / 5px no-repeat;
    }
  }

  .d-flex {
    display: flex;
  }
  
  .filter-dropdown-card {
    left: auto;
    right: 0;
    min-width: 450px;
    padding: 16px;
  }
  
  .date-input-wrap {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 16px;
      align-items: center;
      border-top: 1px solid #e7e7ed;
      padding-top: 16px;
      
      > div {
        width: 48%;
      }
  }
  
  .filter-button-wrap {
    text-align: right;
    margin-top: 16px;
    border-top: 1px solid #e7e7ed;
    padding-top: 16px;
  }
  
  .date-input-wrap .filter-dropdown-card {
    top: 4px;
    right: 0;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
  }
  
  .date-input-wrap .rdr-Calendar {
    margin-left: 0 !important;
    right: 0;
  }
  
  .date-input-wrap .rdr-Calendar .is-selected {
    border-radius: 50%;
  }
  
  .rdr-Day:hover {
    background: #0b5fff !important;
    border-radius: 50%;
  }
  
  .is-inRange, .is-selected {
    background: #0b5fff !important;
    color: #fff !important;
  }
  
  .date-input-block {
    display: flex;
    flex-wrap: wrap;
  }
  
  .rel {
    position: relative;
  }
  
  .date-input .text {
      font-size: 12px;
      color: rgb(107, 108, 126);
      margin-bottom: 4px;
      display: inline-block;
      font-weight: 600;
  }
  
  .date-input .text {
      color: rgb(107, 108, 126);
  }
  
  .moment .ic-date-icon {
    position: absolute;
    top: 10px;
    right: 12px;
    background-size: 16px;
    width: 16px;
    height: 16px;
  }
  
  .moment {
    border: 1px solid #cdced9;
    border-radius: 4px;
    padding: 6px 50px 6px 12px;
    position: relative;
    cursor: pointer;
    font-size: 14px;
  }
  
  .moment .ic-date-icon {
    text-indent: -9999px;
    display: inline-block;
    overflow: hidden;
    background: url(/image/icons/ic_calendar.png) center center no-repeat;
    position: absolute;
    top: 7px;
    right: 12px;
    background-size: 16px;
    width: 16px;
    height: 16px;
  }
`;

export default DatePickerStyled;
