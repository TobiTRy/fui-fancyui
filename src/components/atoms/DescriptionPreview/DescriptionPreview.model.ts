import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';
import { TTypographyVariants } from '@/types/TTypographyVariants';

export type TDescriptionPreview = {
  description: string;
  letterLimit?: number;
  buttonText?: {
    themeType?: TUiColorsNotTransparent;
    layer?: TLayer;
    fontVariant?: TTypographyVariants;
    showMore?: string;
    showLess?: string;
  };
};
