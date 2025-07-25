import Color from 'color';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';

type ColorType = ReturnType<typeof Color>;

export type TColorDisplay = {
  colorValue: string | ColorType;
  opacity?: number;
  fullHeight?: boolean;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizes;
  children?: React.ReactNode;
};

export type TColorDisplayWithHTMLAttrs = TColorDisplay & React.HTMLAttributes<HTMLButtonElement>;
