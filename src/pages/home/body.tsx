import React from 'react';

import {
  BodyWrap,
  ComponentLeft,
  ComponentOne,
  ComponentRight,
  TitleCompOne,
} from './styles';

export const BodyComponent: React.FC = () => {
  return (
    <BodyWrap>
      <ComponentOne>
        <ComponentLeft></ComponentLeft>
        {/* <ComponentRight> */}
        <TitleCompOne>
          <span>Progressive Solutions</span>
          <br />
          <span>Competitive Performance</span>
          <br />
          <span>Global Citizen with Asian DNA</span>
        </TitleCompOne>
        {/* </ComponentRight> */}
      </ComponentOne>
    </BodyWrap>
  );
};

export default React.memo(BodyComponent);
