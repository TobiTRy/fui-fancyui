import Color from 'color';
import { CSSProp } from 'styled-components';

export type TColorArea = {
  color: Color | string;
  hue: number;
  handler: (color: Color) => void;
  externalStyle: CSSProp;
};

export type TColorAreaWithHTMLAttrs = TColorArea & React.HTMLAttributes<HTMLDivElement>;
