import styled from 'styled-components';

const DialogStyled = styled.span`
  display: inline-block;
  font-weight: 600;
`;

const DialogTitleStyled = styled.span`
  display: inline-block;
  font-weight: 600;
`;

const DialogHeaderStyled = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e7e7ed;
  
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #272833;
  }
`;

const DialogFooterStyled = styled.div`
  text-align: right;
  padding: 15px 24px;
`;

const DialogBodyStyled = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e7e7ed;
`;

export {
  DialogTitleStyled,
  DialogHeaderStyled,
  DialogBodyStyled,
  DialogFooterStyled,
  DialogStyled,
};

export default DialogStyled;
