import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TThemeArrayCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

export type TSpacingsContainer = {
  padding?: TThemeArrayCssValues | TThemeValueOrCSS;
  margin?: TThemeArrayCssValues | TThemeValueOrCSS;
  externalStyle?: CSSProp;
};

type TSpacingsContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TSpacingsContainerWithHTMLAttrs<T extends ElementType> = TSpacingsContainer &
  TSpacingsContainerHTMLProps<T>;
