import Color from 'color';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TOpacitySlider = {
  colorValue?: Color | string;
  opacity?: number;
  handler?: (opacity: number) => void;
  sizeC?: TComponentSizes;
  borderRadius?: TThemeArrayOrValueCSS;
};

export type TOpacitySliderWithHTMLProps = TOpacitySlider & React.HTMLAttributes<HTMLDivElement>;
