import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type TFancyBox = {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
};

export type TFancyBoxProps<T extends ElementType = 'div'> = TFancyBox & Omit<React.HTMLAttributes<T>, 'style'>;
