import { TLayer } from '@/components/Interface/TLayer';
import { TTheme } from '@/components/Interface/TTheme';
import { TThemeTypes } from '@/components/Interface/TUiColors';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
