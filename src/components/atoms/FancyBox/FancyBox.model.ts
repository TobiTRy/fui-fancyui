import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TBorderRadiusSizesArray } from '@/types/TBorderRadiusSizes';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TFancyBox = {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  borderRadius?: TBorderRadiusSizesArray;
  sizeC?: TComponentSizes;
};

export type TFancyBoxProps<T extends ElementType = 'div'> = TFancyBox & Omit<React.HTMLAttributes<T>, 'style'>;
