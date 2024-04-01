import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TFancyBoxProps = {
  as?: ElementType;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  borderRadius?: TThemeArrayOrValueCSS;

  sizeC?: TComponentSizes;
};

type TOutlinedFancyBoxProps = {
  outlined?: boolean;
  outlinedRemoveBorder?: boolean;
  outlinedBackgroundStrength?: number;
};

type TNonOutlinedFancyBoxPropsFalse = {
  outlined?: false;
  outlinedRemoveBorder?: never;
  outlinedBackgroundStrength?: never;
};

export type TFancyBox = TFancyBoxProps & (TOutlinedFancyBoxProps | TNonOutlinedFancyBoxPropsFalse);

export type TFancyBoxWithHTMLAttrs<T extends ElementType = 'div'> = TFancyBox &
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, 'style'>;
