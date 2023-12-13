import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

export interface IFancyPill {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  isActive?: boolean;
}

export type IFancyPillProps<T extends ElementType = 'div'> = IFancyPill & Omit<React.HTMLAttributes<T>, 'style'>;
