import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TPasswordStrengthMeter = {
  password: string;
  borderRadiusBar?: TThemeArrayOrValueCSS;
  borderRadius?: TThemeArrayOrValueCSS;
  layer?: TLayer;
  themeType?: TUiColorsMain;
  padding?: TThemeArrayOrValueCSS;
  height?: TThemeValueOrCSS;
  notABar?: boolean;
};
