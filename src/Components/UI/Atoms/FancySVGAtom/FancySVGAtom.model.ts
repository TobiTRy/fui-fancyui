import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';

export const sizes = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '20px',
};

export type ISizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  size?: ISizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
}

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;

export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
