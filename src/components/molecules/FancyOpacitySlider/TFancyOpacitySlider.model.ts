import Color from 'color';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type ColorType = ReturnType<typeof Color>;

export type TFancyOpacitySlider = {
  colorValue?: ColorType | string;
  opacity?: number;
  handler?: (opacity: number) => void;
  sizeC?: TComponentSizes;
  borderRadius?: TThemeArrayOrValueCSS;
};

export type TFancyOpacitySliderWithHTMLProps = TFancyOpacitySlider & React.HTMLAttributes<HTMLDivElement>;
