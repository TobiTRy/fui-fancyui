import { TTabSwitch } from '@/components/molecules/TabSwitch/TTabSwitch.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type TFancyTabSwitch = {
  label?: string;
  themeType?: TUiColorTypes;
  layer?: TLayer;
} & TTabSwitch;
