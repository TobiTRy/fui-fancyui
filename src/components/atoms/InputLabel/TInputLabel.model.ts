import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';

export type TInputLabel = {
  isActive?: boolean;
  systemMessageType?: TUiColorsSystemMessage;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  align?: TTextAlignLRC;
  lableVariant?: 'static' | 'animated';
  externalStyle?: CSSProp;
};

export type TInputLabelNativeAttrs = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'style'>;

export type TInputLabelWithNAtiveAttrs = TInputLabel & TInputLabelNativeAttrs;
