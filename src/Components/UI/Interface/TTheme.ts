import { TUiColorsType } from "../Design/color/designColor";
import { TFontSizes } from "./IFontSizes";
import { TBorderRadiusSizes } from "./TBorderRadius";
import { TSpacings } from "@/Components/UI/Interface/TSpacings";


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
