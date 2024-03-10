import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TFancyBox = {
  as?: ElementType;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  children?: React.ReactNode;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizes;
};

export type TFancyBoxProps<T extends ElementType = 'div'> = TFancyBox &
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, 'style'>;
