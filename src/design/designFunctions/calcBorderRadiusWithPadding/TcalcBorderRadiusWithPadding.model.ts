import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TcalcBorderRadiusWithPadding = {
  borderRadius: TThemeArrayOrValueCSS;
  padding: TThemeArrayOrValueCSS;
  inset?: boolean;
  offset?: number;
};
