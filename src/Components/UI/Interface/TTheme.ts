import { TUiColorsType } from "../Design/color/designColor";
import {  spacingPx } from "../Design/designSizes";
import { TFontSizes } from "./IFontSizes";
import { TBorderRadiusSizes } from "./TBorderRadius";

type TSpacings = keyof typeof spacingPx;

//the structure for the theme object
export type TTheme = {
  colors: TUiColorsType;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: TFontSizes
} ;
