import { TLayer } from '@/types/TLayer';
import { TTextAlignLR } from '@/types/TTextAlignLR';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { CSSProp } from 'styled-components';

export type TFancySelectWrapper = {
  label?: string;
  align?: TTextAlignLRC;
  alignInput?: TTextAlignLR;
  description?: string;
  inputElement?: React.ReactNode;
  externalStyle?: CSSProp;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  layerDescription?: TLayer;
};

export type TFancySelectWrapperWithHTMLProps = TFancySelectWrapper & React.HTMLProps<HTMLLabelElement>;
