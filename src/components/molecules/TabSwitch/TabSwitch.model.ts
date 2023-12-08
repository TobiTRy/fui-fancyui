import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { TBorderRadiusSizes } from '@/interface/TBorderRadius';
import {
  ITabSwitchDetailsLabelIcon,
  ITabSwitchDetailsChildren,
} from '../FancyTabSwitchButton/FancyTabSwitchButton.model';
import { TSpacings } from '@/interface/TSpacings';
import { IActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/SwitchActiveIndicator';

export interface ITabSwitchProps {
  wide?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: TThemeTypes;
  themeType?: TThemeTypes;
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
  activeColor?: TThemeTypes;
  handler?: (value: string) => void;
}
