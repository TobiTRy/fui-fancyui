import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

export interface IFancyPill {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
  isHoverable?: boolean;
}

export type IFancyPillProps = IFancyPill & React.HTMLAttributes<HTMLDivElement>;
