import { CSSProp } from 'styled-components';

import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TSVGAtomSizes = keyof typeof sizes;

export type TSVGAtom = {
  children?: React.ReactNode;
  sizeC?: TSVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  systemMessage?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TSVGAtomProps = TSVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
