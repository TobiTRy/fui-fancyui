import { FlattenSimpleInterpolation } from 'styled-components';
import { IUiColorsTypes } from '../../Design/design';

interface IButtonAtom {
  icon?: React.ReactNode;
  label?: string;
  wide?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  externalStyle?: FlattenSimpleInterpolation;
  design: IUiColorsTypes;
  themeTextColor?: IUiColorsTypes;
  customTextColor?: string;
  customBackgroundColor?: string;
};

export default IButtonAtom;