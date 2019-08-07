import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const BadgeStyled = styled.span`
    border: 1px solid transparent;
    line-height: 10px;
    max-width: 100%;
    white-space: inherit;
    word-wrap: break-word;
    display: inline-block;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    vertical-align: baseline;
    border-radius: 30px;
    
    ${props => props.className === 'primary' && {
        backgroundColor: Colors.primary.P500,
        color: Colors.grey.G050,
        borderColor: Colors.primary.P500,
    }}
    
    ${props => props.className === 'light' && {
        backgroundColor: Colors.grey.G300,
        borderColor: Colors.grey.G300,
        color: Colors.grey.G1400,
    }}
    
    ${props => props.className === 'success' && {
        backgroundColor: Colors.secGreen.SG500,
        borderColor: Colors.secGreen.SG500,
        color: Colors.grey.G050,
    }}
    
    ${props => props.className === 'info' && {
        backgroundColor: Colors.primary.P500,
        borderColor: Colors.primary.P500,
        color: Colors.grey.G050,
    }}
    
    ${props => props.className === 'danger' && {
        backgroundColor: Colors.secRed.SR500,
        borderColor: Colors.secRed.SR500,
        color: Colors.grey.G050,
    }}
    
    ${props => props.className === 'warning' && {
        backgroundColor: Colors.secYellow.SY500,
        borderColor: Colors.secYellow.SY500,
        color: Colors.grey.G050,
    }}
`;

export default BadgeStyled;
