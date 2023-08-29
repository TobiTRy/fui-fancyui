import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';

export const sizes = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '20px',
};

export type ISizes = keyof typeof sizes;

export interface ISVGAtom {
  children?: React.ReactNode;
  size?: ISizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  ariaLabel?: string;
  errorMessage?: string;
}



export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children' | 'ariaLabel'>;
