import { FlattenSimpleInterpolation } from 'styled-components';

interface IButtonAtom {
  icon?: React.ReactNode;
  label?: string;
  wide?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  externalStyle?: FlattenSimpleInterpolation;
};

export default IButtonAtom;