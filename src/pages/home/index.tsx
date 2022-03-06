import React from 'react';

import Body from '../../components/body';
import Footer from '../../components/footer';
import Header from '../../components/header';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default React.memo(HomePage);
