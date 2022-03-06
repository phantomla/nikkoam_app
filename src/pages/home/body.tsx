import React, {useCallback} from 'react';

import {
  BodyWrap,
  ComponentLeft,
  ComponentLeftTwo,
  ComponentOne,
  ComponentRight,
  ComponentRightTwo,
  ComponentTwo,
  ContentCompOne,
  LineShadow,
  LineShadowTwo,
  LinkCompOne,
  LinkCompTwo,
  TitleCompOne,
} from './styles';

export const BodyComponent: React.FC = () => {
  const openGoole = useCallback(() => {
    open('https://google.com.vn');
  }, []);
  return (
    <BodyWrap>
      <ComponentOne>
        <ComponentLeft>
          <img src="/images/wave.svg" height={950} />
        </ComponentLeft>
        <ComponentRight>
          <TitleCompOne>
            <p>Progressive Solutions</p>
            <p>Competitive Performance</p>
            <p>Global Citizen with Asian DNA</p>
          </TitleCompOne>
          <LineShadow>
            <ContentCompOne>
              We’re one of Asia’s largest asset managers.
            </ContentCompOne>
            <LinkCompOne onClick={openGoole}>
              Learn more about who we are
              <img src="/images/arrow.svg" height={24} width={24} />
            </LinkCompOne>
          </LineShadow>
        </ComponentRight>
      </ComponentOne>

      <ComponentTwo>
        <ComponentLeftTwo>
          <img src="/images/diacau.svg" />
        </ComponentLeftTwo>
        <ComponentRightTwo>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '24px',
              letterSpacing: '-0.02em',
              margin: '168px 0 32px 0',
            }}
          >
            Team of unique combination
          </p>

          <p
            style={{
              fontSize: '73px',
              lineHeight: '82px',
              letterSpacing: '-0.03em',
              margin: '0',
            }}
          >
            Global Intelligence
          </p>
          <p
            style={{
              fontSize: '73px',
              lineHeight: '82px',
              letterSpacing: '-0.03em',
              margin: '0',
            }}
          >
            Asian Insights
          </p>
          <p
            style={{
              fontSize: '73px',
              lineHeight: '82px',
              letterSpacing: '-0.03em',
              margin: '0 0 104px 0',
            }}
          >
            Local Experience
          </p>
          <LineShadowTwo>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.025em',
                margin: '0 0 48px 32px',
              }}
            >
              We transform intelligent insights into innovative, relevant
              investment opportunities for our clients. Leveraging our unique
              combination of a global perspective complemented by our Asian DNA,
              we aspire to create sophisticated and diverse solutions that set
              new standards in the asset management industry.
            </p>
            <LinkCompTwo onClick={openGoole}>
              Learn more about what makes us unique
              <img src="/images/arrow-white.svg" height={24} width={24} />
            </LinkCompTwo>
          </LineShadowTwo>
        </ComponentRightTwo>
      </ComponentTwo>
    </BodyWrap>
  );
};

export default React.memo(BodyComponent);
