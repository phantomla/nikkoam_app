import React from 'react';

import AboutComponent from '../home';

export const CustomComponent: React.FC = () => {
  return <AboutComponent />;
};

export default React.memo(CustomComponent);
