import { TBorderRadiusSizes } from './TBorderRadiusSizes';
import { TUiColorsTypeObject } from './TUiColorsTypeObject';
import { TSpacings } from './TSpacings';
import { breakpoints } from '@/design/theme/brakePoints';
import { TTypographyObj } from '@/components/atoms/Typography/Typography.model';

//the structure for the theme object
export type TTheme = {
  colors: TUiColorsTypeObject;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: TTypographyObj;
  breakpoints: {
    [key in keyof typeof breakpoints]: string;
  };
};
