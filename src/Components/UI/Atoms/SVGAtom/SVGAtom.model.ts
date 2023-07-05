import { CSSProp } from 'styled-components';
import IStyledPrefixAndOmiter from '../../Interface/StyledPrefixer.model';

export const sizes = {
  small: '16px',
  medium: '18px',
  large: '20px',
};

export type ISizes = keyof typeof sizes;

export interface ISVGAtom {
  children: React.ReactNode;
  size: ISizes;
  isActive?: boolean;
  errorMessage?: string;
  externalStyle?: CSSProp;
}

export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, '$children'>;
