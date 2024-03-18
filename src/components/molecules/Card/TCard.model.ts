import { TFancyBox } from '@/components/atoms/FancyBox';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';
// the raw styling props for the card
export type TCard = {
  shadow?: boolean;
  borderRadius?: TThemeArrayOrValueCSS;
  padding?: TThemeArrayOrValueCSS;
};

export type TCardWithFancyBoxAttrs = TCard & TFancyBox;
