import { CSSProp } from 'styled-components';

import { sizes } from '@/components/atoms/FancySVGAtom/sizeSettings';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TFancySVGAtomSizes = keyof typeof sizes;

export type TFancySVGAtom = {
  children?: React.ReactNode;
  sizeC?: TFancySVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  systemMessage?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancySVGAtomWithNativeAttrs = TFancySVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
