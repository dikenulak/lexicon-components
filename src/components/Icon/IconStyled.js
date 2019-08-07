import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const IconStyled = styled.span`
    svg {
        display: inline-block;
        fill: currentColor;
        width: ${props => props.iconWidth || "16px"};
        height: ${props => props.iconHeight || "16px"};;
        margin-top: -3px;
        vertical-align: middle;
        pointer-events: ${props => props.disabled ?  "none": "unset"};
        opacity: ${props => props.disabled ?  "0.4": "0.8"};
    }
`;

export default IconStyled;
