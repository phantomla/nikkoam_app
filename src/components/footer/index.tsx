import useDeviceDetector from 'components/hook/detext';
import React, {useCallback} from 'react';

import {
  ComponentLeftFooter,
  ComponentRightFooter,
  FooterWrap,
  TableFooter,
  TdFooter,
} from './styles';

export const HeaderComponent: React.FC = () => {
  const {isSp} = useDeviceDetector();

  const openLink = useCallback(() => {
    open('https://google.com.vn');
  }, []);

  return (
    <FooterWrap>
      <ComponentLeftFooter>
        {!isSp && <img src="/images/wave-footer.svg" />}
        <p
          style={
            isSp
              ? {
                  fontSize: '42px',
                  lineHeight: '48px',
                  letterSpacing: '-0.02em',
                  color: '#1A1A1A',
                  margin: 0,
                  padding: '80px 24px 0 24px',
                }
              : {
                  fontSize: '73px',
                  lineHeight: '82px',
                  letterSpacing: '-0.03em',
                  color: '#1A1A1A',
                  position: 'absolute',
                  left: '118px',
                  top: '172px',
                }
          }
        >
          Invest with
        </p>
        <p
          style={
            isSp
              ? {
                  fontSize: '42px',
                  lineHeight: '48px',
                  letterSpacing: '-0.02em',
                  color: '#00A4B8',
                  padding: '0 24px 64px 24px',
                  margin: 0,
                }
              : {
                  fontSize: '73px',
                  lineHeight: '82px',
                  letterSpacing: '-0.03em',
                  position: 'absolute',
                  left: '118px',
                  top: '254px',
                }
          }
        >
          Nikko AM
        </p>
      </ComponentLeftFooter>
      <ComponentRightFooter>
        <TableFooter>
          <tbody>
            {['Equity', 'Bond', 'Multi-Assets', 'ETFs'].map(
              (item: string, index: number) => {
                return (
                  <tr key={`itemFooter-${index}`}>
                    <TdFooter onClick={openLink}>
                      {item}
                      <img
                        src="/images/icon-footer.svg"
                        height={24}
                        width={24}
                      />
                    </TdFooter>
                  </tr>
                );
              },
            )}
          </tbody>
        </TableFooter>
      </ComponentRightFooter>
      {isSp && <img src="/images/wave-footer.svg" width={150} />}
    </FooterWrap>
  );
};

export default React.memo(HeaderComponent);
