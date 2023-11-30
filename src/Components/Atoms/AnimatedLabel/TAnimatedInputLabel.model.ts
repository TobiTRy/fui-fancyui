import { TLayer } from '@/components/core/interface/TLayer';
import { TTheme } from '@/components/core/interface/TTheme';
import { TThemeTypes } from '@/components/core/interface/TUiColors';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
