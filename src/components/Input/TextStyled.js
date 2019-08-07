import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const TextStyled = styled.input`
    background-clip: border-box;
    border: 1px solid #C1C7D0;
    height: 40px;
    min-width: 0;
    padding: 8px 16px;
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    color: #030913;
    background: #FAFBFC;
    border-radius: 4px;
    box-shadow: none;
    overflow: visible;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #8995A6;
    }
    
    &::-moz-placeholder { /* Firefox 19+ */
      color: #8995A6;
    }
    
    &:-ms-input-placeholder { /* IE 10+ */
      color: #8995A6;
    }
    
    &:-moz-placeholder { /* Firefox 18- */
      color: #8995A6;
    }
    
    ${props => props.status === 'success' && {
        borderColor: Colors.secGreen.SG500,
        backgroundColor: Colors.grey.G050,
        color: Colors.grey.G1900,
    }}
    
    ${props => props.status === 'info' && {
        borderColor: Colors.primary.P500,
        backgroundColor: Colors.grey.G050,
        color: Colors.grey.G1900,
    }}
    
    ${props => props.status === 'warning' && {
        borderColor: Colors.secYellow.SY500,
        backgroundColor: Colors.grey.G050,
        color: Colors.grey.G1900,
    }}
    
    ${props => props.status === 'danger' && {
        borderColor: Colors.secRed.SR500,
        backgroundColor: Colors.grey.G050,
        color: Colors.grey.G1900,
    }}
    
    &:focus {
        color: #272833;
        background-color: #f0f5ff;
        border-color: #80acff;
        outline: 0;
    }
    
    &:not([type=range]) {
      -webkit-appearance: none;
    }
`;
const LabelStyled = styled.label`
    display: inline-block;
    margin-bottom: 4px;
    color: #272833;
    font-size: 14px;
    font-weight: 600;
`;

const MessageStyled = styled.span`
    margin-top: 5px;
    display: inline-block;
    color: #8993A4;
    font-size: 14px;
    font-weight: 600;
    
    ${props => props.status === 'success' && {
        color: Colors.secGreen.SG500,
    }}
    
    ${props => props.status === 'info' && {
        color: Colors.primary.P500,
    }}
    
    ${props => props.status === 'danger' && {
        color: Colors.secRed.SR500,
    }}
    
    ${props => props.status === 'warning' && {
        color: Colors.secYellow.SY500,
    }}
`;

export {TextStyled, LabelStyled, MessageStyled};

