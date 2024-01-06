import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TColorStateOutput } from '@/design/designFunctions/calcColorState';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: TColorStateOutput;
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
