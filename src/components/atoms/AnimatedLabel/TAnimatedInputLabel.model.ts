import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TUiColors';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
