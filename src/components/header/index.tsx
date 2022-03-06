import useDeviceDetector from 'components/hook/detext';
import {useRouter} from 'next/router';
import React, {useCallback, useEffect, useState} from 'react';

import {
  DropIcon,
  HeaderWrap,
  Logo,
  Menu,
  MenuItem,
  MenuItemCountry,
  MenuItemPulldown,
  MenuWrap,
  SearchIcon,
} from './styles';

export const HeaderComponent: React.FC = () => {
  const router = useRouter();
  const [isShowNav, setIsShowNav] = useState(false);
  const {isSp} = useDeviceDetector();

  const nextPage = useCallback(
    (url: string) => {
      try {
        if (!url) return;

        router.push(url);
      } catch (error) {
        throw new Error(error);
      }
    },
    [router],
  );

  const onClickNav = useCallback(() => {
    try {
      setIsShowNav(!isShowNav);
    } catch (error) {
      throw new Error(error);
    }
  }, [isShowNav]);

  useEffect(() => {
    if (isSp) {
      setIsShowNav(false);
    } else {
      setIsShowNav(true);
    }
  }, [isSp]);

  return (
    <HeaderWrap>
      <Logo onClick={() => nextPage('/home')}>
        <img src={isSp ? '/images/logo_sp.svg' : '/images/logo.svg'} />
      </Logo>
      {<SearchIcon src={'/images/search.svg'} />}
      {<DropIcon onClick={onClickNav} src={'/images/drop.svg'} />}
      {isShowNav && (
        <Menu>
          <MenuWrap>
            <MenuItem onClick={() => nextPage('/about')}>{'About us'}</MenuItem>
            <MenuItem onClick={() => nextPage('/sustainability')}>
              {'Sustainability'}
            </MenuItem>
            <MenuItem onClick={() => nextPage('/news')}>
              {'Insights & News'}
            </MenuItem>
            <MenuItem onClick={() => nextPage('/strategies')}>
              {'Strategies'}
            </MenuItem>
            <MenuItem onClick={() => nextPage('/funds')}>{'Funds'}</MenuItem>
            <MenuItem onClick={() => nextPage('/invest')}>
              {'How to Invest'}
            </MenuItem>
            {isSp ? (
              <MenuItemCountry>{'Country'}</MenuItemCountry>
            ) : (
              <MenuItemPulldown>
                <select>
                  <option value="0">Singapore</option>
                  <option value="1">VietNam</option>
                  <option value="2">Korea</option>
                </select>
              </MenuItemPulldown>
            )}

            {!isSp && (
              <MenuItem>
                <img src="/images/search.svg" height={24} width={24} />
              </MenuItem>
            )}
          </MenuWrap>
        </Menu>
      )}
    </HeaderWrap>
  );
};

export default React.memo(HeaderComponent);
