import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  
  &.active.disabled {
    opacity: 0.2;
    
    .custom-control-label-text {
      opacity: 1;
    }
    
    label {
      cursor: no-drop;
    }
  }
  
  &.disabled {
    .control-label:before {
      background-color: #ebecf0;
      border-color: #C1C7D0;
    }
    
    .custom-control-label-text {
      opacity: 0.2;
    }
    
    label {
      cursor: no-drop;
    }
    input {
      pointer-events: none;
    }
    input:focus ~.control-label:before {
      box-shadow: none;
    }
  }
  
  label {
    cursor: pointer;
    font-size: 1rem;
    display: inline-block;
    margin-bottom: 0;
  }
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 1.0625rem;
    left: 0;
    top: .21875rem;
    width: 1.0625rem;
    z-index: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
    &:focus~.control-label:before {
      box-shadow: 0 0 0 1px #f1f2f5, 0 0 0 2px #80acff;
    }

    &:checked ~ .control-label {
        &:before {
          color: #fff;
          background-color: #0b5fff;
          box-shadow: none;
          border-color: #0b5fff;
        }
    
        &:after {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M502.091%2060.993c-9.909-9.91-25.962-9.91-35.843%200L129.26%20397.981%2045.752%20314.53c-9.881-9.909-25.962-9.909-35.843%200-9.909%209.909-9.909%2025.962%200%2035.843l98.257%2098.257c2.608%202.608%205.679%204.433%208.924%205.679%204.028%202.464%208.403%204.115%2012.952%204.115%206.49%200%2012.981-2.464%2017.936-7.418L502.09%2096.865c9.909-9.909%209.909-25.962%200-35.871v-.001z'%20fill='%23FFF'/%3E%3C/svg%3E");
          background-size: 60%;
        }
    }
  }
  
  .control-label {
    font-size: 14px;
    line-height: 26px;
  
  &:before, &:after {
    position: absolute;
    top: .21875rem;
    left: 0;
    width: 1.0625rem;
    height: 1.0625rem;
    content: "";
  }
  
  &:before {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    box-shadow: none;
    border: .0625rem solid #cdced9;
    font-size: 1.0625rem;
    display: block;
    float: left;
    position: relative;
    border-radius: .125rem;
  }
  
  &:after {
    display: block;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 50% 50%;
  }
  
  .custom-control-label-text {
    padding-left: .5rem;
  }
  }
  
`;

export { CheckboxWrapper };
