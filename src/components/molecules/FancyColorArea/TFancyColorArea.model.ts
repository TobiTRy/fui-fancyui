import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import Color from 'color';
import { CSSProp } from 'styled-components';

export type TColorArea = {
  colorValue?: Color | string;
  borderRadius?: TThemeArrayOrValueCSS;
  hue?: number;
  handler?: (color: Color) => void;
  externalStyle?: CSSProp;
};

export type TColorAreaWithHTMLAttrs = TColorArea & React.HTMLAttributes<HTMLDivElement>;
