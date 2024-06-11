import { TTabSwitchWithHTMLAtts } from '@/components/molecules/TabSwitch/TTabSwitch.model';
import { TLayer } from '@/types/TLayer';
import { TSpacings } from '@/types/TSpacings';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsMainAndAccent } from '@/types/TUiColorsMainAndAccent';

export type TFancyTabSwitch = {
  label?: string;
  themeType?: TUiColorsMain | 'transparent';
  layer?: TLayer;
  spacingToEdge?: TSpacings;
  activeTextColor?: TUiColorsMainAndAccent;
};

export type FancyTabSwitchWithTabSwitchAtts = TFancyTabSwitch & Omit<TTabSwitchWithHTMLAtts, 'themeType'>;
