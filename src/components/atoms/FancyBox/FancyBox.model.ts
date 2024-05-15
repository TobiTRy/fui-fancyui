import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TFancyBoxProps = {
  as?: ElementType;
  layer?: TLayer;
  themeType?: TUiColorTypes;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  borderRadius?: TThemeArrayOrValueCSS;
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizesExtended;
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
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
