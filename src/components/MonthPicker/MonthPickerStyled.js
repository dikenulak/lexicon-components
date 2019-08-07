import styled from 'styled-components';

const MonthPickerStyled = styled.div`
 position: relative;
 display: inline-block;
 
 .filter-icon {
  margin-right: 16px;
  
  .primary {
    position: absolute;
    top: -10px;
    right: 8px;
  }
 }
 
 .filter-dropdown-card {
    min-width: 220px;
    left: 0;
    right: auto;
 }
 
 .month-view {
    background: transparent;
    padding: 8px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 4px;
 }
 
 .month-icon {
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
 
 .month-view .ic-dropdown {
    width: 20px;
    height: 20px;
    text-indent: -9999px;
    display: inline-block;
    overflow: hidden;
    transform: rotate(90deg);
    background: url(/image/icons/ic_dropdown.svg) center center / 5px no-repeat;
 }
`;

export default MonthPickerStyled;
