import Color from 'color';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TColorDisplay = {
  colorValue: Color | string;
  opacity?: number;
  fullHeight?: boolean;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizes;
  children?: React.ReactNode;
};

export type TColorDisplayWithHTMLAttrs = TColorDisplay & React.HTMLAttributes<HTMLButtonElement>;
