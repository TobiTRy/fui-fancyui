import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: TUiColorsSystemMessage;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
