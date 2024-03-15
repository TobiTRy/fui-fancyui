import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TLayer } from '@/types/TLayer';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { TTabSwitchDetailsChildren, TTabSwitchDetailsLabelIcon } from '@/components/molecules/FancyTabSwitchButton';

export interface ITabSwitchProps {
  wide?: boolean;
  sizeC?: TComponentSizes;
  textColor?: TUiColorsNotTransparent;
  themeType?: TUiColorTypes;
  layer?: TLayer;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: TTabSwitchDetailsChildren[] & TTabSwitchDetailsLabelIcon[];
  rounded?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: TActiveSwitchIndicator['type'];
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TUiColorsNotTransparent;
  handler?: (value: string) => void;
}
