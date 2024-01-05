import { CSSProp } from 'styled-components';

import IStyledPrefixAndOmiter from '@/types/IStyledPrefixAndOmiter';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';

export type TSizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  size?: TSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  test?: string;
};

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;

export type IStyledSVGAtom = IStyledPrefixAndOmiter<ISVGAtom, 'children'>;
