import { CSSProp } from 'styled-components';

import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export type TSVGAtomSizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  size?: TSVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
