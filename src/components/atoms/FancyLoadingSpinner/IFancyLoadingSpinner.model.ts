import { TLayer } from '@/types/TLayer';
import { sizes } from './sizeSettings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyLoadingSpinner = {
  sizeC?: keyof typeof sizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLoadingSpinnerHTMLAttributes = React.HTMLAttributes<HTMLDivElement>;

export type TFancyLoadingSpinnerWithHTMLProps = TFancyLoadingSpinner & TFancyLoadingSpinnerHTMLAttributes;
