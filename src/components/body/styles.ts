/* eslint-disable max-lines */
import styled from 'styled-components';

export const BodyWrap = styled.div``;

export const ComponentOne = styled.div`
  /* flex-flow: column wrap; */
  background-color: #e5e5e5;
  flex-direction: row;
  height: 59.125rem;
  display: flex;
  position: relative;
  top: 64px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    top: 0;
    display: block;
    height: 46rem;
  }
`;

export const ComponentLeft = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    img {
      height: 24rem;
    }
  }
`;

export const ComponentRight = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 0 10px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    display: block;
    padding: 0 24px;
  }
`;

export const TitleCompOne = styled.div`
  p {
    font-size: 58px;
    line-height: 64px;
    margin: 4px 0;
    /* identical to box height, or 110% */
    letter-spacing: -0.03em;
    color: #1a1a1a;
    mix-blend-mode: normal;
  }
  padding-bottom: 64px;
  padding-top: 17.5rem;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding-top: 0;
    padding-bottom: 37px;
    p {
      font-size: 29px;
      line-height: 36px;
      letter-spacing: -0.02em;
    }
  }
`;

export const ContentCompOne = styled.p`
  font-size: 30px;
  line-height: 38px;
  /* identical to box height, or 127% */
  letter-spacing: -0.025em;
  /* Grey */
  color: #474747;
  padding: 0 0 0 30px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    p {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.02em;
    }
    opacity: 0.5;
    padding: 0;
  }
`;

export const LinkCompOne = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.025em;
  /* Nikko Teal */
  color: #00a4b8;
  padding: 16px 0 0 30px;
  margin: 0;
  align-items: center;
  display: flex;
  img {
    margin-left: 4px;
  }
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    p {
      font-size: 16px;
      letter-spacing: -0.02em;
    }
    padding: 24px 0 0 0;
  }
`;

export const LineShadow = styled.div`
  border-left: 0.5px solid #8a8a8a;
  height: 17rem;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    height: 0;
  }
`;

export const LineShadowTwo = styled.div`
  border-left: 0.5px solid #fafafa;
  height: 18rem;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    height: 0;
  }
`;

export const ComponentTwo = styled.div`
  /* flex-flow: column wrap; */
  flex-direction: row;
  height: 54.5rem;
  display: flex;
  background-color: #00a4b8;
  margin-top: 64px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin-top: 0;
    display: block;
    height: 68.375rem;
  }
`;

export const ComponentLeftTwo = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
  display: flex;
  align-self: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 64px 0;
  }
`;

export const ComponentRightTwo = styled.div`
  flex-basis: 60%;
  padding: 10px 0 0 10px;
  color: #fafafa;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 0 24px;
  }
`;

export const LinkCompTwo = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.025em;
  /* Nikko Teal */
  padding: 0 0 0 30px;
  margin: 0;
  align-items: center;
  display: flex;
  img {
    margin-left: 4px;
  }
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 0;
    font-size: 16px;
  }
`;

export const ComponentChart = styled.div`
  /* flex-flow: column wrap; */
  background-color: #e5e5e5;
  flex-direction: row;
  height: 79rem;
  display: flex;
  position: relative;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    height: 50.75rem;
    display: block;
  }
`;

export const ComponentLeftChart = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
  margin-bottom: 8.75rem;
  position: relative;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin-bottom: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 40px 0 0 0;
  }
`;

type FundStatusProps = {
  active: boolean;
  top: number;
};
export const FundStatus = styled.p<FundStatusProps>`
  font-weight: 500;
  font-size: 150px;
  line-height: 132px;
  /* identical to box height, or 133% */
  letter-spacing: -0.03em;
  color: #00a4b8;
  /* Nikko Teal */
  /* padding: 0 6.125rem 3rem 20.45rem; */
  margin: 0;
  opacity: ${props => (props.active ? '' : '0.1')};
  cursor: pointer;
  position: absolute;
  right: 100px;
  top: ${props => Number(props.top + 207) + 'px'};
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-weight: normal;
    font-size: 52px;
    line-height: 60px;
    position: unset;
    top: 0;
    padding: 0 24px 0 0;
  }
`;

export const ComponentRightChart = styled.div`
  flex-basis: 60%;
  padding: 10px 0 0 10px;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 64px 24px 0 24px;
  }
`;

export const LinkCompChart = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.025em;
  /* Nikko Teal */
  color: #00a4b8;
  padding: 0 0 0 10px;
  margin: 0;
  align-items: center;
  display: flex;
  img {
    margin-left: 4px;
  }
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 56px 0;
  }
`;

export const TableInfo = styled.table`
  padding: 5.3125rem 0 56px 10px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 24px 24px 26px 0;
  }
`;
export const TdInfo = styled.td`
  padding: 16px 0;
  border-top: 0.5px solid #8a8a8a;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    border: none;
    padding: 4px 0;
  }
`;
export const TdInfoEnd = styled.td`
  padding: 16px 0;
  border-top: 0.5px solid #8a8a8a;
  border-bottom: 0.5px solid #8a8a8a;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    border: none;
    padding: 4px 0;
  }
`;

export const SpanLeft = styled.span`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.025em;
  margin: 16px 16px 16px 0;
  color: #1a1a1a;
  width: 316px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.025em;
    margin: 8px 8px 8px 0;
  }
`;
export const SpanRight = styled.span`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.025em;
  margin: 16px 0;
  color: #8a8a8a;
  width: 316px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.025em;
  }
`;

export default {
  BodyWrap,
  LinkCompOne,
  ComponentChart,
};
