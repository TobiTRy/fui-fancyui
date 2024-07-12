import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TSwipeUpContainer = {
  children: React.ReactNode;
  style?: { height: string };
  isScalable?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  isOpen?: boolean;
};

export type TSwipeUpContainerWithHTMLAttrs = TSwipeUpContainer & React.HTMLAttributes<HTMLDivElement>;
