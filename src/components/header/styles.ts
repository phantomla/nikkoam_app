import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 118px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  background-color: #e5e5e5;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    padding: 56px 0 24px 24px;
    display: inline-flex;
    position: relative;
  }
`;

export const DropIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 24px;
    /* For mobile phones: */
  }
`;

export const SearchIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    right: 64px;
    /* For mobile phones: */
  }
`;

export const Logo = styled.div`
  height: 100%;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    display: inline-flex;
    position: absolute;
    right: 24px;
    top: 86px;
  }
`;
export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  max-height: 16px;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    display: block;
  }
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
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 10px;
    background-color: #00a4b8;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.03em;
    border-bottom: 0.5px solid white;
  }
`;

export const MenuItemCountry = styled.div`
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
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    padding: 10px;
    background-color: #00a4b8;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.03em;
    border-bottom: 0.5px solid white;
    width: 200px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MenuItemPulldown = styled.div`
  margin-left: 40px;
  font-size: 12px;
  margin-bottom: 1px;
  line-height: 16px;
  letter-spacing: -0.008em;
  align-items: center;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
  select {
    border: none;
    color: #8a8a8a;
    background-color: #e5e5e5;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    display: block;
  }
`;

export default {
  HeaderWrap,
  Logo,
  Menu,
  MenuItem,
  MenuWrap,
};
