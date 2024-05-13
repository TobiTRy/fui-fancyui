import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TSystemMessage = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  children: React.ReactNode;
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizesExtended;
  externalStyle?: CSSProp;
};
