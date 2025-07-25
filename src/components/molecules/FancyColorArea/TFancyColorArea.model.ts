import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import Color from 'color';
import { CSSProp } from 'styled-components';

type ColorType = ReturnType<typeof Color>;

export type TColorArea = {
  colorValue?: ColorType | string;
  borderRadius?: TThemeArrayOrValueCSS;
  hue?: number;
  handler?: (color: ColorType) => void;
  externalStyle?: CSSProp;
};

export type TColorAreaWithHTMLAttrs = TColorArea & React.HTMLAttributes<HTMLDivElement>;
