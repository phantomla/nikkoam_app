import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 118px;
  align-items: center;
  position: fixed;
  width: 100%;
  background: white;
  top: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  height: 16px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  max-height: 16px;
`;

export const MenuItem = styled.div`
  margin-left: 40px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.008em;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const BodyWrap = styled.div``;

export const ComponentOne = styled.div`
  /* flex-flow: column wrap; */
  background-color: white;
  flex-direction: row;
  height: 59.125rem;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
  }

  display: flex;
  position: relative;
  top: 64px;
`;

export const ComponentLeft = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
`;

export const ComponentRight = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 0 10px;
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
  padding-bottom: 30px;
  padding-top: 17.5rem;
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
`;

export const LineShadow = styled.div`
  border-left: 0.5px solid #8a8a8a;
  height: 17.75rem;
`;

export const LineShadowTwo = styled.div`
  border-left: 0.5px solid #fafafa;
  height: 17.75rem;
`;

export const ComponentTwo = styled.div`
  /* flex-flow: column wrap; */
  flex-direction: row;
  height: 54.5rem;
  display: flex;
  background-color: #00a4b8;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
  }
  margin-top: 64px;
`;

export const ComponentLeftTwo = styled.div`
  flex-basis: 40%;
  /* height: 100px; */
`;

export const ComponentRightTwo = styled.div`
  flex-basis: 60%;
  padding: 10px 0 0 10px;
  color: #fafafa;
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
`;

export default {
  HeaderWrap,
  Logo,
  Menu,
  MenuItem,
  MenuWrap,
  BodyWrap,
  LinkCompOne,
};
