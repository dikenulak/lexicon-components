import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const CardStyled = styled.badge`
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

  ${props => props.className === 'primary' && {
  backgroundColor: Colors.primary.P500,
  color: Colors.grey.G050,
  borderColor: Colors.primary.P500,
}}
  
  &:hover, &:focus {
    ${props => props.className === 'primary' && {
  backgroundColor: Colors.primary.P600,
  borderColor: Colors.primary.P600,
}}
  }
  
  ${props => props.className === 'secondary' && {
  backgroundColor: Colors.primary.G100,
  color: Colors.grey.G900,
  borderColor: Colors.primary.G500,
}}
  
  &:hover, &:focus {
    ${props => props.className === 'secondary' && {
  backgroundColor: Colors.primary.G100,
  color: Colors.grey.G1900,
  borderColor: Colors.primary.G200,
}}
  }
  
  > span {
    margin-left: 10px;
  } 
`;

export default CardStyled;
