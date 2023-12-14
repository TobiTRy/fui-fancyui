import { CSSProp } from 'styled-components';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

export interface IFancyPill {
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
}

export type IFancyPillProps = IFancyPill & React.HTMLAttributes<HTMLDivElement>;
