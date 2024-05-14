import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TSystemMessageBox = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  children?: React.ReactNode;
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizes;
  externalStyle?: CSSProp;
};

export type TSystemMessageBoxHTMLAttrs = React.HTMLAttributes<HTMLDivElement>;

export type TSystemMessageBoxWithHTMLAttrs = TSystemMessageBox & TSystemMessageBoxHTMLAttrs;
