import styled from 'styled-components';

const PaginationStyled = styled.div`
    line-height: normal;
    background: rgb(247, 248, 249);
    padding: 12px 16px;
    
    .pagination-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .pagination-control {
      flex: 1;
    }
    
    .pagination-control-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .pagination-item {
      display: inline-block;
      
      > span {
        display: inline-block;
        padding: 6px 12px;
        
        &.active {
          background-color: #EBECF0;
        }
      }
    }
    
    .pagination-display-label {
      color: rgb(39, 40, 51);
      font-size: 14px;
    }
    
    .nav {
      color: #8993A4;
      font-weight: 600;
      font-size: 14px;
      
      span {
        cursor: pointer;
        
        &:hover, &:focus {
          color: #0056E0;
        }
      }
    }
`;

export default PaginationStyled;
