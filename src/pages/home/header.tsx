import React from 'react';

import {HeaderWrap, Logo, Menu, MenuItem, MenuWrap} from './styles';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrap>
      <Logo>
        <img src={'/images/logo.svg'} height={16} width={110.25} />
      </Logo>
      <Menu>
        <MenuWrap>
          <MenuItem>{'About us'}</MenuItem>
          <MenuItem>{'Sustainability'}</MenuItem>
          <MenuItem>{'Insights & News'}</MenuItem>
          <MenuItem>{'Strategies'}</MenuItem>
          <MenuItem>{'Funds'}</MenuItem>
          <MenuItem>{'How to Invest'}</MenuItem>
          <MenuItem>{'pulldown'}</MenuItem>
          <MenuItem>
            <img src="/images/search.svg" height={24} width={24} />
          </MenuItem>
        </MenuWrap>
      </Menu>
    </HeaderWrap>
  );
};

export default React.memo(HeaderComponent);
