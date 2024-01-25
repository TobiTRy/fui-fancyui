import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

export type TDescriptionPreview = {
  description: string;
  letterLimit?: number;
  buttonText?: {
    themeType?: TUiColorsNotTransparent;
    layer?: TLayer;
    showMore?: string;
    showLess?: string;
  };
};
