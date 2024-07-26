import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TLayer } from '@/types/TLayer';
import { TSpacings } from '@/types/TSpacings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { CSSProp } from 'styled-components';

export type TActiveSwitchIndicator = {
  itemNumber: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  tabSpacing?: TSpacings;
  type?: 'bolb' | 'underline' | 'topline' | 'leftline' | 'rightline';
  borderRadius?: TThemeArrayOrValueCSS;
  outlined?: boolean;
  direction?: 'horizontal' | 'vertical';
  indicatorWidth?: string;
  indicatorHeight?: string;
  externalStyle?: CSSProp;
};

export type TActiveSwitchIndicatorWithHTMLAttrs = TActiveSwitchIndicator & React.HTMLAttributes<HTMLDivElement>;
