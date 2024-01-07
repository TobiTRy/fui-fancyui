import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TItemStateOutput } from '@/design/designFunctions/calcItemState';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: TItemStateOutput;
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
