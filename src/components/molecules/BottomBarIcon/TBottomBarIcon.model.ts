import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TBottomBarIcon = {
  icon: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  isActive?: boolean;
  hoverStyle?: boolean;
  disabled?: boolean;
  themeType?: TUiColorsNotTransparent;
  activeThemeType?: TUiColorsNotTransparent;
  activeLayer?: TLayer;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  externalStyle?: CSSProp;
};

export type TBottomBarIconWithHTMLAttributes = TBottomBarIcon & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
