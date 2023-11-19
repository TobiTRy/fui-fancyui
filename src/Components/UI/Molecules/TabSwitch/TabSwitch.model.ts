import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from "../../Design/color/generateColorSteps";
import { TBorderRadiusSizes } from "@/Components/UI/Interface/TBorderRadius";
import {ITabSwitchDetailsLabelIcon , ITabSwitchDetailsChildren } from "../FancyTabSwitchButton/FancyTabSwitchButton.model";
import { TSpacings } from '../../Interface/TSpacings';

export interface ITabSwitchProps {
  wide?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: TUiColors;
  themeType?: TUiColors;
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
  activeColor?: TUiColors;
  handler?: (value: string) => void;
}