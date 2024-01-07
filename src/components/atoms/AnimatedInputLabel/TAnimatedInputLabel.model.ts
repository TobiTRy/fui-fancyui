import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TItemStateOutput } from '@/design/designFunctions/calcItemState';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: TItemStateOutput;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
