import { TLayer } from '@/types/TLayer';
import { sizes } from './sizeSettings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { HTMLAttributes } from 'react';

export type TFancyLoadingSpinner = {
  sizeC?: keyof typeof sizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLoadingSpinnerHTMLProps = HTMLAttributes<HTMLDivElement>;

export type TFancyLoadingSpinnerWithHTMLProps = TFancyLoadingSpinner & TFancyLoadingSpinnerHTMLProps;
