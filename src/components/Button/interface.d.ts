import {ButtonProps as MuiButtonProps} from '@material-ui/core/Button';

export interface IButtonProps extends MuiButtonProps {
  color?: 'primary' | 'secondary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}
