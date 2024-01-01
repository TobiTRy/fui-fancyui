import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

export interface IFancyBox {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
}

export type IFancyBoxProps<T extends ElementType = 'div'> = IFancyBox & Omit<React.HTMLAttributes<T>, 'style'>;
