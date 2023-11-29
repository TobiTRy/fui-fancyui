import { TLayer } from '@/Components/Interface/TLayer';
import { TTheme } from '@/Components/Interface/TTheme';
import { TThemeTypes } from '@/Components/Interface/TUiColors';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
