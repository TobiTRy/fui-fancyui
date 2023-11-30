import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import { TBorderRadiusSizes } from '@/components/core/interface/TBorderRadius';
import { ITabSwitchDetailsLabelIcon, ITabSwitchDetailsChildren } from '../FancyTabSwitchButton/FancyTabSwitchButton.model';
import { TSpacings } from '../../core/interface/TSpacings';

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
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: TThemeTypes;
  handler?: (value: string) => void;
}
