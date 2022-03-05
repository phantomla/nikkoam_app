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
  flex-direction: row;
  display: flex;
  position: relative;
  top: 64px;
`;

export const ComponentLeft = styled.div`
  flex-grow: 4; /* default 0 */
  background-color: red;
  height: 100px;
`;

export const ComponentRight = styled.div`
  flex-grow: 6; /* default 0 */
  background-color: green;
  /* height: 100px; */
`;

export const TitleCompOne = styled.div`
  flex-grow: 6; /* default 0 */
  background-color: green;
  span {
    font-size: 58px;
    line-height: 64px;
    /* identical to box height, or 110% */
    letter-spacing: -0.03em;
    color: #1a1a1a;
    mix-blend-mode: normal;
  }
`;

export default {
  HeaderWrap,
  Logo,
  Menu,
  MenuItem,
  MenuWrap,
  BodyWrap,
};
