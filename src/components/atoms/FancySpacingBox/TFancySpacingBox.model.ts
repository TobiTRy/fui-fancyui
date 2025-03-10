import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TglobalElementSizesWithFit } from '@/types';

export type TFancySpacingBox = {
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  width?: TglobalElementSizesWithFit;
  height?: TglobalElementSizesWithFit;
  externalStyle?: CSSProp;
};

type TFancySpacingBoxHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TFancySpacingBoxWithHTMLAttrs<T extends ElementType> = TFancySpacingBox & TFancySpacingBoxHTMLProps<T>;
