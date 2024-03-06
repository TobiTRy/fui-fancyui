import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TBottomBarIcon = {
  icon: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeC?: TComponentSizes;
};

export type TBottomBarIconWithHTMLAttributes = TBottomBarIcon & React.HTMLAttributes<HTMLDivElement>;
