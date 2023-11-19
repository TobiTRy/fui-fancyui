import { TUiColorsType } from "../Design/color/designColor";
import { fontSizes, spacingPx } from "../Design/designSizes";
import { TBorderRadiusSizes } from "./TBorderRadius";

type TSpacings = keyof typeof spacingPx;

// If you need to access specific types within FontSizes, you can use indexing
type DesktopFontSizes = typeof fontSizes.desktop;
type MobileFontSizes = typeof fontSizes.mobile;


export type TTheme = {
  colors: TUiColorsType;
  spacing: {
    [key in TSpacings]: string;
  };
  borderRadius: {
    [key in TBorderRadiusSizes]: string;
  };
  fontSizes: {
    mobile: MobileFontSizes;
    desktop: DesktopFontSizes;
  };
};
