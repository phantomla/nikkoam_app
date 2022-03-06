import useDeviceDetector from 'components/hook/detext';
import React, {useCallback, useMemo, useState} from 'react';

import {
  BodyWrap,
  ComponentChart,
  ComponentLeft,
  ComponentLeftChart,
  ComponentLeftTwo,
  ComponentOne,
  ComponentRight,
  ComponentRightChart,
  ComponentRightTwo,
  ComponentTwo,
  ContentCompOne,
  FundStatus,
  LineShadow,
  LineShadowTwo,
  LinkCompChart,
  LinkCompOne,
  LinkCompTwo,
  SpanLeft,
  SpanRight,
  TableInfo,
  TdInfo,
  TdInfoEnd,
  TitleCompOne,
} from './styles';

export const BodyComponent: React.FC = () => {
  const [active, setActive] = useState(1);
  const {isSp} = useDeviceDetector();

  const openLink = useCallback(() => {
    open('https://google.com.vn');
  }, []);

  const titleCompTwo = useMemo(() => {
    return isSp
      ? {
          fontSize: '42px',
          lineHeight: '48px',
          letterSpacing: '-0.02em',
          margin: '0',
        }
      : {
          fontSize: '73px',
          lineHeight: '82px',
          letterSpacing: '-0.03em',
          margin: '0',
        };
  }, [isSp]);

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
            {isSp ? (
              <>
                <p>Global Citizen with</p>
                <p>Asian DNA</p>
              </>
            ) : (
              <p>Global Citizen with Asian DNA</p>
            )}
          </TitleCompOne>
          <LineShadow>
            <ContentCompOne>
              We’re one of Asia’s largest asset managers.
            </ContentCompOne>
            <LinkCompOne onClick={openLink}>
              Learn more about who we are
              <img src="/images/arrow.svg" height={24} width={24} />
            </LinkCompOne>
          </LineShadow>
        </ComponentRight>
      </ComponentOne>

      <ComponentTwo>
        <ComponentLeftTwo>
          <img src="/images/diacau.svg" width={isSp ? 328 : 380} />
        </ComponentLeftTwo>
        <ComponentRightTwo>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '24px',
              letterSpacing: '-0.02em',
              margin: isSp ? '0 0 40px 0' : '168px 0 32px 0',
            }}
          >
            Team of unique combination
          </p>

          <p style={titleCompTwo}>Global Intelligence</p>
          <p style={titleCompTwo}>Asian Insights</p>
          <p style={titleCompTwo}>Local Experience</p>
          <LineShadowTwo>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.025em',
                margin: isSp ? '48px 0 48px 0' : '104px 0 48px 32px',
                width: isSp ? '' : '40rem',
              }}
            >
              We transform intelligent insights into innovative, relevant
              investment opportunities for our clients. Leveraging our unique
              combination of a global perspective complemented by our Asian DNA,
              we aspire to create sophisticated and diverse solutions that set
              new standards in the asset management industry.
            </p>
            <LinkCompTwo onClick={openLink}>
              Learn more about what makes us unique
              <img src="/images/arrow-white.svg" height={24} width={24} />
            </LinkCompTwo>
          </LineShadowTwo>
        </ComponentRightTwo>
      </ComponentTwo>

      <ComponentChart>
        {!isSp && (
          <ComponentLeftChart>
            {[...Array(4)].map((_, index: number) => {
              return (
                <FundStatus
                  onClick={() => {
                    setActive(index + 1);
                  }}
                  active={active === index + 1}
                  key={`FundStatus${index}`}
                  top={index * 180}
                >{`0${index + 1}`}</FundStatus>
              );
            })}
          </ComponentLeftChart>
        )}

        <ComponentRightChart>
          <p
            style={
              isSp
                ? {
                    fontSize: '42px',
                    lineHeight: '48px',
                    letterSpacing: '-0.02em',
                    margin: '0 45px 0 0',
                    color: '#1A1A1A',
                  }
                : {
                    fontSize: '73px',
                    lineHeight: '82px',
                    letterSpacing: '-0.03em',
                    margin: '184px 0 0 10px',
                    color: '#1A1A1A',
                    width: '29.5rem',
                  }
            }
          >
            Our Featured Funds
          </p>

          {isSp && (
            <ComponentLeftChart>
              {[...Array(4)].map((_, index: number) => {
                return (
                  <FundStatus
                    onClick={() => {
                      setActive(index + 1);
                    }}
                    active={active === index + 1}
                    key={`FundStatus${index}`}
                    top={index * 180}
                  >{`0${index + 1}`}</FundStatus>
                );
              })}
            </ComponentLeftChart>
          )}
          <p
            style={
              isSp
                ? {
                    fontSize: '22px',
                    lineHeight: '28px',
                    letterSpacing: '-0.02em',
                    margin: '40px 86px 0 0',
                    color: '#00A4B8',
                  }
                : {
                    fontSize: '40px',
                    lineHeight: '48px',
                    letterSpacing: '-0.03em',
                    margin: '64px 0 0 10px',
                    color: '#00A4B8',
                    width: '29.5rem',
                  }
            }
          >
            Nikko AM ARK Disruptive Innovation Fund
          </p>
          {!isSp && <img src="/images/chart.svg" />}

          <TableInfo>
            <tbody>
              {[
                {key: 'NAV (per 100 shares)', value: '¥196,977'},
                {key: 'Net Assets', value: '7,309,193 million'},
                {key: 'Day Change', value: '- ¥1,094'},
                {key: 'Issued', value: '3,710,686,634 shares'},
              ].map((item: {key: string; value: string}, index: number) => {
                return (
                  <tr key={`FundItem-${index}`}>
                    {index === 3 ? (
                      <TdInfoEnd>
                        <SpanLeft>{item.key}</SpanLeft>
                        <SpanRight>{item.value}</SpanRight>
                      </TdInfoEnd>
                    ) : (
                      <TdInfo>
                        <SpanLeft>{item.key}</SpanLeft>
                        <SpanRight>{item.value}</SpanRight>
                      </TdInfo>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </TableInfo>

          {isSp && <img src="/images/chart.svg" width={327} />}

          <LinkCompChart onClick={openLink}>
            Explore more funds
            <img src="/images/arrow.svg" height={24} width={24} />
          </LinkCompChart>
        </ComponentRightChart>
      </ComponentChart>
    </BodyWrap>
  );
};

export default React.memo(BodyComponent);
