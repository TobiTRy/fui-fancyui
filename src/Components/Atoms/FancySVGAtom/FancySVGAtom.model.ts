import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../core/interface/IStyledPrefixAndOmiter.model';
import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';

export const sizes = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '20px',
  xl: '24px',
  full: '100%',
};

export type ISizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  size?: ISizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
};

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;

export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
