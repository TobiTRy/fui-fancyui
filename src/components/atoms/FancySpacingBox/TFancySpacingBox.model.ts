import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TSpacingsContainer = {
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  externalStyle?: CSSProp;
};

type TSpacingsContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TSpacingsContainerWithHTMLAttrs<T extends ElementType> = TSpacingsContainer &
  TSpacingsContainerHTMLProps<T>;
