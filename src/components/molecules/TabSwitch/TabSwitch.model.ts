import { TUiColorTypes } from '@/types/TUiColorTypes';
import { TLayer } from '@/types/TLayer';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import {
  ITabSwitchDetailsLabelIcon,
  ITabSwitchDetailsChildren,
} from '../FancyTabSwitchButton/FancyTabSwitchButton.model';
import { TSpacings } from '@/types/TSpacings';
import { IActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/SwitchActiveIndicator';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface ITabSwitchProps {
  wide?: boolean;
  sizeC?: TComponentSizes;
  textColor?: TUiColorsNotTransparent;
  themeType?: TUiColorTypes;
  layer?: TLayer;
  disabled?: boolean;
  tabSpacing?: TSpacings;
  values: ITabSwitchDetailsChildren[] & ITabSwitchDetailsLabelIcon[];
  rounded?: TBorderRadiusSizes;
  direction?: 'horizontal' | 'vertical';
  indicatorType?: IActiveSwitchIndicator['type'];
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TUiColorsNotTransparent;
  handler?: (value: string) => void;
}
