import styled from 'styled-components';

const FilterMenuStyled = styled.div`
 position: relative;
 
 .filter-icon {
  margin-right: 16px;
  
  .primary {
    position: absolute;
    top: -10px;
    right: 8px;
  }
 }
 
 .filter-dropdown-card {
    position: absolute;
    right: 16px;
    top: 120%;
    min-width: 500px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 10px 1px;
    z-index: 1;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(231, 231, 237);
    border-image: initial;
    
    .filter-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      font-weight: var(--semi-bold);
      color: rgb(39, 40, 51);
      padding: 8px 16px;
      border-bottom: 1px solid rgb(231, 231, 237);
    }
    
    .filter-content {
      padding: 20px 16px 16px;
    }
    
    .no-filter-text {
      font-size: 12px;
      color: rgb(39, 40, 51);
      line-height: 24px;
      margin-bottom: 30px;
    }
    
    [id*="filter-id-"] {
      margin-bottom: 16px;
    }
 }
 
 .filter-flex {
    display: flex;
  }
  
  .filter-close {
    padding-top: 10px;
    > span {
      display: inline-block;
      color: #6a6b7e;
      margin: 0 10px 0 0;
      cursor: pointer;
    }
  }
  
 .filter-select-input {
    margin-right: 8px;
    
    > div {
      width: 180px;
    }
 }
 
 .filter-contain-wrap {
    display: flex;
    flex: 1 1 0%;
    min-height: 38px;
    
    > div {
      position: relative;
      display: inline-block;
      width: calc(100% - 58px);
    }
 }
 
 .filter-contain-group {
    position: absolute;
    top: 110%;
    right: 0;
    width: 200px;
    height: 200px;
    overflow-y: scroll;
    box-shadow: rgba(0,0,0,0.1) 1px 2px 10px 1px;
    z-index: 1;
    background: rgb(255,255,255);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(231,231,237);
    border-image: initial;
    padding: 8px 12px;
    color: #696b7e;
 }
 
 .filter-contain-item {
    display: flex;
    padding: 5px 0;
    align-items: center;
    
    > div {
      top: -2px;
    }
    
    .filter-item-name {
      font-size: 12px;
      display: inline-block;
      margin-left: 16px;
    }
 }
 
 .selected-filter-item {
    display: inline-block;
    font-size: 12px;
    position: relative;
    margin-bottom: 8px;
    margin-right: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(128, 172, 255);
    border-image: initial;
    border-radius: 4px;
    background: rgb(255, 255, 255);
    padding: 3px 32px 3px 8px;
    
    .filter-close {
      position: absolute;
      top: 2px;
      right: 5px;
      padding-top: 0;
      
      span {
        border: 1px solid #ccc;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        margin: 0;
      }
      
      svg {
        width: 6px;
        height: 6px;
        display: block;
        margin: 0 auto;
      }
    }
 }
 
 .filter-contain-input-wrap {
    width: 100%;
    min-height: 38px;
    max-height: 150px;
    overflow-y: scroll;
    border-radius: 4px;
    background: rgb(231, 231, 237);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(231, 231, 237);
    border-image: initial;
    padding: 5px;
    outline: none;
    
    input {
      width: 100%;
      outline: none;
      min-height: 26px;
      background: transparent;
      border-color: transparent;
    }
 }
 
 .selected-filter-item-wrap {
  display: inline-block;
  
  &:empty {
    display: none;
  }
 }
 
 .filter-contain-text {
    font-size: 12px;
    display: inline-block;
    margin-right: 8px;
    color: rgb(39, 40, 51);
    font-weight: normal;
    padding-top: 10px;
 }
 
 .hidden {
  display: none;
 }
 
`;

export default FilterMenuStyled;
