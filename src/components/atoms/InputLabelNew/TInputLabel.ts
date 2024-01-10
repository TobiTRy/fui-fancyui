import { CSSProp } from 'styled-components';
import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TInputLabel = {
  isActive?: boolean;
  systemMessageType?: TUiColorsSystemMessage;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  align?: TTextAlignLC;
  lableVariant: 'static' | 'animated';
  externalStyle?: CSSProp;
};
