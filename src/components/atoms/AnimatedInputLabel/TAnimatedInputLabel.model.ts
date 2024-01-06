import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TColorStateOutput } from '@/design/designFunctions/calcColorState';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: TColorStateOutput;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
