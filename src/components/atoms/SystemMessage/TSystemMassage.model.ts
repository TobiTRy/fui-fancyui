import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TSystemMessage = {
  systemMessageState?: TUiColorsSystemMessage;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  children?: React.ReactNode;
};
