import styled from 'styled-components';

const CustomSelectStyled = styled.div`
    .custom-select-wrapper {
      margin-right: 16px;
      position: relative;
      outline: none;
    }
    
    .pagination-display-label {
      cursor: pointer;
    }
    
    .custom-select-option {
      margin-bottom: 0;
      min-height: auto;
      cursor: pointer;
    }
    
    .custom-options-list-bottom {
      position: absolute;
      top: 25px;
      background: #fff;
      border-radius: 4px;
      min-width: 100px;
      box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
      padding: 5px 0;
      
      li {
        padding: 5px 10px;
        font-size: 12px;
        cursor: pointer;
        
        &:before, &:after {
          color: #0056E0;
        }
      }
    }
`;

export default CustomSelectStyled;
