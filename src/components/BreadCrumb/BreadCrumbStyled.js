import styled from 'styled-components';

const BreadCrumbUlStyled = styled.ul`

`;


const BreadCrumbLiStyled = styled.li`
display: inline-block;
padding-right: 14px;
margin-right: 10px;
position: relative;

&:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    transform: rotate(-45deg) translateY(-50%);
    right: 0;
    top: 48%;
    border-style: solid;
    border-color: #6b6c7e;
    border-image: initial;
    border-width: 0 1px 1px 0;
}

&:last-child{
margin-right: 0;

&:after {
display: none;
}
}

a {
    text-decoration: none;
    color: #6b6c7e;
    font-size: 12px;
    line-height: 20px;
    transition: all 0.3s ease-in-out;
    
    &:hover, &:focus {
      color: #272833;
      transition: all 0.3s ease-in-out;
    }
    
    &.active {
      color: #272833;
      transition: all 0.3s ease-in-out;
      font-weight: 600;
    }
}
`;


export {BreadCrumbUlStyled, BreadCrumbLiStyled};
