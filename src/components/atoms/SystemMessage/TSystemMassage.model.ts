import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TSystemMessage = {
  systemMessageState?: TUiColorsSystemMessage;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  children?: React.ReactNode;
  ownTypographyComponent?: boolean;
  externalStyle?: CSSProp;
};
