import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface IAlignedLabel {
  $align?: TTextAlignLRC;
  $systemMessageType?: TUiColorsSystemMessage;
  theme?: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}
