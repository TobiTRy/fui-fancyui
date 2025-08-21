import { TLayer } from '@/types/TLayer';
import { TTextAlignLR } from '@/types/TTextAlignLR';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { CSSProp } from 'styled-components';
import { TSpacings } from '@/types';

export type TFancySelectWrapper = {
  label?: string;
  align?: TTextAlignLRC | 'space-between';
  alignInput?: TTextAlignLR;
  description?: string;
  inputElement?: React.ReactNode;
  externalStyle?: CSSProp;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  layerDescription?: TLayer;
  gap?: TSpacings;
};

export type TFancySelectWrapperWithHTMLProps = TFancySelectWrapper & React.HTMLProps<HTMLLabelElement>;
