import { TFontSizes } from './IFontSizes';
import { TBorderRadiusSizes } from './TBorderRadiusSizes';
import { TUiColorsTypeObject } from './TUiColorsTypeObject';
import { TSpacings } from './TSpacings';
import { breakpoints } from '@/design/theme/brakePoints';

//the structure for the theme object
export type TTheme = {
  colors: TUiColorsTypeObject;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: TFontSizes;
  breakpoints: {
    [key in keyof typeof breakpoints]: string;
  };
};
