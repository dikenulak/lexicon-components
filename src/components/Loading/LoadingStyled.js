import styled from 'styled-components';

const LoadingStyled = styled.div`
  position: fixed;
  bottom: 24px;
  margin-left: 16px;
  color: #e7e7ed;
  z-index: 999;

  .loading-wrap {
    background: #272833;
    padding: 10px 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 4px;
  }

  .spinner {
    position: relative;
    margin-right: 30px;
    transform: scale(0.7);
  
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 7px;
      height: 7px;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 50%;
      color: #fff;
      content: '';
      will-change: box-shadow;
      animation: spinner-anim 1.3s infinite linear;
    }
  }

  @keyframes spinner-anim {
    0%,
    100% {
      box-shadow: 0 -15px 0 1px, 10px -10px 0 0, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 0;
    }
  
    12.5% {
      box-shadow: 0 -15px 0 0, 10px -10px 0 1px, 15px 0 0 0, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;
    }
  
    25% {
      box-shadow: 0 -15px 0 -5px, 10px -10px 0 0, 15px 0 0 1px, 10px 10px 0 0, 0 15px 0 -5px, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;
    }
  
    37.5% {
      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 0, 10px 10px 0 1px, 0 15px 0 0, -10px 10px 0 -5px, -15px 0 0 -5px, -10px -10px 0 -5px;
    }
  
    50% {
      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 0, 0 15px 0 1px, -10px 10px 0 0, -15px 0 0 -5px, -10px -10px 0 -5px;
    }
  
    62.5% {
      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 0, -10px 10px 0 1px, -15px 0 0 0, -10px -10px 0 -5px;
    }
  
    75% {
      box-shadow: 0 -15px 0 -5px, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 0, -15px 0 0 1px, -10px -10px 0 0;
    }
  
    87.5% {
      box-shadow: 0 -15px 0 0, 10px -10px 0 -5px, 15px 0 0 -5px, 10px 10px 0 -5px, 0 15px 0 -5px, -10px 10px 0 0, -15px 0 0 0, -10px -10px 0 1px;
    }
  }
`;

export default LoadingStyled;
