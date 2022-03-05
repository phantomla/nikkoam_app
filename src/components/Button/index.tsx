import {StylesProvider} from '@material-ui/core';
import React from 'react';

import {IButtonProps} from './interface.d';
import {Button as MaterialButton} from './style';

const Button: React.FC<IButtonProps> = ({
  children,
  color = 'primary',
  onClick,
  id,
  type = 'button',
}) => {
  return (
    <StylesProvider injectFirst>
      <MaterialButton
        name={id}
        type={type}
        onClick={onClick}
        color={color}
        id={id}
      >
        {children}
      </MaterialButton>
    </StylesProvider>
  );
};
export default React.memo(Button);
