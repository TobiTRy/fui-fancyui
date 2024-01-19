import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';

export type TDescriptionPreview = {
  description: string;
  letterLimit?: number;
  buttonText?: {
    themeType?: TThemeTypesNotTransparent;
    layer?: TLayer;
    showMore?: string;
    showLess?: string;
  };
};
