import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const ButtonStyled = styled.button`
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  letter-spacing: 0;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  outline: none;
  margin-right: 15px;
  text-transform: capitalize;
  
  &:last-of-type {
    margin-right: 0;  
  }

  ${props => props.className.includes('primary') && {
    backgroundColor: Colors.primary.P500,
    color: Colors.grey.G050,
    borderColor: Colors.primary.P500,
}}
  
  &:hover, &:focus {
    ${props => props.className.includes('primary') && {
    backgroundColor: Colors.primary.P600,
    borderColor: Colors.primary.P600,
}}
  }
  
  ${props => props.className.includes('secondary') && {
    backgroundColor: Colors.secMagenta.SM500,
    color: Colors.grey.G050,
    borderColor: Colors.secMagenta.SM500,
}}
  
  &:hover, &:focus {
    ${props => props.className.includes('secondary') && {
    backgroundColor: Colors.secMagenta.SM600,
    borderColor: Colors.secMagenta.SM600,
}}
  }
  
  ${props => props.className.includes('outlined') && {
    backgroundColor: Colors.grey.G100,
    color: Colors.grey.G1900,
    borderColor: Colors.grey.G500,
}}
  
  &:hover, &:focus {
    ${props => props.className.includes('outlined') && {
    backgroundColor: Colors.primary.P600,
    borderColor: Colors.primary.P600,
    color: Colors.grey.G050,
}}
    }
    
    &.disabled {
      opacity: 0.4;
      cursor: no-drop;
      pointer-events: none;
      
      &.primary {
        background: #0E69FF;
        border-color: #0E69FF;
        color: #fff;
      }
      
      &.secondary {
        background: #FF4081;
        border-color: #FF4081;
        color: #fff;
      }
    }
    
    &.link {
      padding: 0;
      color: #0E69FF;
      text-decoration: underline;
      background: transparent;
      
      &:hover, &:focus {
        color: #0056E0;
        text-decoration: none;
      }
    }
  
  > span {
    margin-left: 10px;
    
    &:first-child {
      margin-left: 0;
    }
  } 
`;

export default ButtonStyled;
