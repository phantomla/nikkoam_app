import styled from 'styled-components';

export const FooterWrap = styled.div`
  /* flex-flow: column wrap; */
  flex-direction: row;
  height: 44rem;
  display: flex;
  background-color: #dff8f8;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
    display: block;
    height: 40rem;
  }
`;

export const ComponentLeftFooter = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
  display: flex;
  align-self: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    display: block;
  }
`;

export const ComponentRightFooter = styled.div`
  flex-basis: 60%;
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

export const TableFooter = styled.table`
  padding: 10px 0 0 10px;
`;

export const TdFooter = styled.td`
  padding: 24px 5px;
  border-bottom: 0.5px solid #8a8a8a;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: -0.03em;
  cursor: pointer;
  width: 696px;
  position: relative;
  img {
    position: absolute;
    right: 5px;
  }
  &:hover {
    transform: scale(1.01);
  }
`;
