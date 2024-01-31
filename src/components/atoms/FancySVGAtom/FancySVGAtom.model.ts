import { CSSProp } from 'styled-components';

import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TSVGAtomSizes = keyof typeof sizes;

export type ISVGAtom = {
  children?: React.ReactNode;
  sizeC?: TSVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  errorMessage?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type ISVGAtomProps = ISVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
