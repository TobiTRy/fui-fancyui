import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyPill = {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorsNotTransparent;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
  isHoverable?: boolean;
};

export type TFancyPillWithHTMLAttrs = TFancyPill & React.HTMLAttributes<HTMLDivElement>;
