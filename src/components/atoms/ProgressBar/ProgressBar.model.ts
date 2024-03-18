import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TProgressBar = {
  progress?: number;
  maxValue?: number;
  id?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TProgressBarWithHTMLAttrs = TProgressBar & React.HTMLAttributes<HTMLDivElement>;
