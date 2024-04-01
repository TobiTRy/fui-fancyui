import { TTabSwitchWithHTMLAtts } from '@/components/molecules/TabSwitch/TTabSwitch.model';
import { TLayer } from '@/types/TLayer';
import { TSpacings } from '@/types/TSpacings';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyTabSwitch = {
  label?: string;
  themeType?: TUiColorsMain | 'transparent';
  layer?: TLayer;
  spacingToEdge?: TSpacings;
  activeTextColor?: TUiColorsMain;
};

export type FancyTabSwitchWithTabSwitchAtts = TFancyTabSwitch & Omit<TTabSwitchWithHTMLAtts, 'themeType'>;
