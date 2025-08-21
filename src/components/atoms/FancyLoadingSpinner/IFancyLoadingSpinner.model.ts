import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

export type TFancyLoadingSpinner = {
  sizeC?: TglobalElementSizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLoadingSpinnerHTMLAttributes = React.HTMLAttributes<HTMLDivElement>;

export type TFancyLoadingSpinnerWithHTMLProps = TFancyLoadingSpinner & TFancyLoadingSpinnerHTMLAttributes;
