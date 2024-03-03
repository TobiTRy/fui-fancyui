import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TLayer } from '@/types/TLayer';
import { TSpacings } from '@/types/TSpacings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TActiveSwitchIndicator = {
  itemNumber: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  tabSpacing?: TSpacings;
  type?: 'bolb' | 'underline' | 'topline';
  rounded?: TBorderRadiusSizes | string;
  outlined?: boolean;
  direction?: 'horizontal' | 'vertical';
  indicatorWidth?: string;
};

export type TActiveSwitchIndicatorWithHTMLAttrs = TActiveSwitchIndicator & React.HTMLAttributes<HTMLDivElement>;
