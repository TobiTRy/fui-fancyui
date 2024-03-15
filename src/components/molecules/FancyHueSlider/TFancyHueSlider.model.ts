import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizes } from '@/types/TComponentSizes';

export type THueSlider = {
  handler?: (hue: number) => void;
  hue?: number;
  sizeC?: TComponentSizes;
  borderRadius?: TThemeArrayOrValueCSS;
};

export type THueSliderWithHTMLProps = THueSlider & React.HTMLProps<HTMLDivElement>;
