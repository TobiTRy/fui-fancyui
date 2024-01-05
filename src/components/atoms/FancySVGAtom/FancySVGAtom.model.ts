import { CSSProp } from 'styled-components';

import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';

export type TSVGAtomSizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  size?: TSVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
};

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
