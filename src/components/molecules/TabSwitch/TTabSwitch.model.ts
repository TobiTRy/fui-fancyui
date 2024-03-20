import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTabSwitchDetailsChildren, TTabSwitchDetailsLabelIcon } from '@/components/molecules/FancyTabSwitchButton';

export type TTabSwitch = {
  wide?: boolean;
  sizeC?: TComponentSizes;
  textColor?: TUiColorsNotTransparent;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: TTabSwitchDetailsChildren[] & TTabSwitchDetailsLabelIcon[];
  rounded?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: TActiveSwitchIndicator['type'];
  outlined?: boolean;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TUiColorsNotTransparent;
  handler?: (value: string) => void;
};
