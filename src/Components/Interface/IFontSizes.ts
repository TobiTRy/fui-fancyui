import { fontSizes } from '../Design/designSizes';

type DesktopFontSizes = typeof fontSizes.desktop;
type MobileFontSizes = typeof fontSizes.mobile;

export type TFontSizes = {
  mobile: MobileFontSizes;
  desktop: DesktopFontSizes;
};
