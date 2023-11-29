import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { TBorderRadiusSizes } from '@/Components/Interface/TBorderRadius';
import { ITabSwitchDetailsLabelIcon, ITabSwitchDetailsChildren } from '../FancyTabSwitchButton/FancyTabSwitchButton.model';
import { TSpacings } from '../../Interface/TSpacings';

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
