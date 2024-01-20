import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

export type TFancyBox = {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TThemeTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
};

export type TFancyBoxProps<T extends ElementType = 'div'> = TFancyBox & Omit<React.HTMLAttributes<T>, 'style'>;
