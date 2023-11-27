import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TTheme } from '@/Components/UI/Interface/TTheme';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
