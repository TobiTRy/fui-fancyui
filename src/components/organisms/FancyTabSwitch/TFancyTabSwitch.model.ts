import { TTabSwitchWithHTMLAtts } from '@/components/molecules/TabSwitch/TTabSwitch.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyTabSwitch = {
  label?: string;
  themeType?: TUiColorsMain | 'transparent';
  layer?: TLayer;
};

export type FancyTabSwitchWithTabSwitchAtts = TFancyTabSwitch & Omit<TTabSwitchWithHTMLAtts, 'themeType'>;
