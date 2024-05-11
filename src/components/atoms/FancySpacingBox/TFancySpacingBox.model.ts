import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TFancySpacingBox = {
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  externalStyle?: CSSProp;
};

type TFancySpacingBoxHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TFancySpacingBoxWithHTMLAttrs<T extends ElementType> = TFancySpacingBox & TFancySpacingBoxHTMLProps<T>;
