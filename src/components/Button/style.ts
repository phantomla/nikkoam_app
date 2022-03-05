import {Button as MaterialButton} from '@material-ui/core';
import styled from 'styled-components';

import {LightenDarkenColor, theme} from '../../styles/theme';

const handleCheckColor = (color: string) => {
  switch (color) {
    case 'primary':
      return theme.primary;
    case 'secondary':
      return theme.secondary;
    default:
      return theme.primary;
  }
};
export const Button = styled(MaterialButton)`
  padding: 14px 10px;
  font-size: 15px;
  height: 46px;
  border: none;
  cursor: pointer;
  width: 100%;
  text-transform: capitalize;
  color: ${theme.white};
  background: ${props => handleCheckColor(props.color)};
  transition: all 0.2s;
  :hover {
    background: ${props =>
      LightenDarkenColor(handleCheckColor(props.color), -30)};
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
`;
