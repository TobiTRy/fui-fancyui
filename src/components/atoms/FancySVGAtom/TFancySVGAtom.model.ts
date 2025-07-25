import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { sizes } from './sizeSettings';

export type TFancySVGAtom = {
  children?: React.ReactNode;
  sizeC?: TFancySVGAtomSizes;
  externalStyle?: CSSProp;
  isPassive?: boolean;
  isActive?: boolean;
  systemMessage?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent | 'inherit';
  layer?: TLayer;
};

export type TFancySVGAtomWithNativeAttrs = TFancySVGAtom & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;

export type TFancySVGAtomSizes = keyof typeof sizes;
