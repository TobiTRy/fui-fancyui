import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

import { TThemeArrayCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TThemeCSSValue } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';

export type TSpacingsContainer = {
  padding?: TThemeArrayCssValues | TThemeCSSValue;
  margin?: TThemeArrayCssValues | TThemeCSSValue;
  externalStyle?: CSSProp;
};

type TSpacingsContainerHTMLProps<T extends ElementType> = {
  as?: React.ElementType;
} & Omit<React.HTMLAttributes<T>, 'style'>;

export type TSpacingsContainerWithHTMLAttrs<T extends ElementType> = TSpacingsContainer &
  TSpacingsContainerHTMLProps<T>;
