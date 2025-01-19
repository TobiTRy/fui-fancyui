import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TTypography } from '@/components/atoms/Typography';

export type TSystemMessage = {
  systemMessageType?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  textSettings?: TTypography;
  showMessage?: boolean;
};

export type TSystemMessageHTMLAttrs = React.HTMLAttributes<HTMLSpanElement>;

export type TSystemMessageWithHTMLAttrs = TSystemMessage & TSystemMessageHTMLAttrs;
