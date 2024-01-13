import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export interface IAlignedLabel {
  $align?: TTextAlignLRC;
  $systemMessageType?: TUiColorsSystemMessage;
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
