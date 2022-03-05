import React from 'react';

import Body from './body';
import Header from './header';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default React.memo(HomePage);
