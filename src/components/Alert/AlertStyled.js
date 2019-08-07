import styled from 'styled-components';
import Colors from '../../utils/theme/color';

const AlertStyled = styled.div`
  .alert {
    position: relative;
    padding: 20px 40px 20px 15px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    word-wrap: break-word;
    box-shadow: 0 0.5rem 2rem -0.25rem rgba(0,0,0,.3);
    
    ${props => props.type === 'success' && {
        backgroundColor: Colors.secGreen.SG050,
        borderColor: Colors.secGreen.SG400,
        color: Colors.secGreen.SG500,
    }}
    
    ${props => props.type === 'info' && {
        backgroundColor: Colors.primary.P050,
        borderColor: Colors.primary.P300,
        color: Colors.primary.P500,
    }}
    
    ${props => props.type === 'danger' && {
        backgroundColor: Colors.secRed.SR050,
        borderColor: Colors.secRed.SR300,
        color: Colors.secRed.SR500,
    }}
    
    ${props => props.type === 'warning' && {
        backgroundColor: Colors.secYellow.SY050,
        borderColor: Colors.secYellow.SY300,
        color: Colors.secYellow.SY500,
    }}
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &-dismiss {
      position: absolute;
      right: 0;
      top: 47%;
      transform: translateY(-50%);
      cursor: pointer;
      pointer-events: auto;
    }
    
    &-message {
        max-width: 300px;
        display: inline-block;
        line-height: 22px;
    }
    
    .icon {
      margin-top: 0;
    }
    
    .icon, .alert-lead {
      margin-right: 15px;
      font-weight: normal;
      line-height: 22px;
    }
  }
`;

export default AlertStyled;
