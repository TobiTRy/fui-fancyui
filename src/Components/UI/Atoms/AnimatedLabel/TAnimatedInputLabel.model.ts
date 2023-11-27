import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TTheme } from '@/Components/UI/Interface/TTheme';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme?: TTheme;
}
