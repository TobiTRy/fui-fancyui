import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';

export const sizes = {
  extraSmall: '14px',
  small: '16px',
  medium: '18px',
  large: '20px',
};

export type ISizes = keyof typeof sizes;

export interface ISVGAtom {
  children?: React.ReactNode;
  size?: ISizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
}



export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
