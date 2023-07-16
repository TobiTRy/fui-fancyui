import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';

export const sizes = {
  small: '16px',
  medium: '18px',
  large: '20px',
};

export type ISizes = keyof typeof sizes;

interface SVGAtom {
  children: React.ReactNode;
  size?: ISizes;
  externalStyle?: CSSProp;
  isPassive?: true;
}

interface SVGDynamicAtom {
  isPassive?: false;
  isActive?: boolean;
  errorMessage?: string;
}

export type ISVGAtom = SVGAtom & SVGDynamicAtom;

export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
