import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface IFancyPill {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorsNotTransparent;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
  isHoverable?: boolean;
}

export type IFancyPillProps = IFancyPill & React.HTMLAttributes<HTMLDivElement>;
