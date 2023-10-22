import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { borderRadius, spacingPx } from "../../Design/design";
import {ITabSwitchDetailsLabelIcon , ITabSwitchDetailsChildren } from "../FancyTabSwitchButton/FancyTabSwitchButton.model";

export interface ITabSwitchProps {
  wide?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: keyof TUiColorsType;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  disabled?: boolean;
  tabSpacing?: keyof typeof spacingPx;
  values: ITabSwitchDetailsChildren[] & ITabSwitchDetailsLabelIcon[];
  rounded?: keyof typeof borderRadius;
  direction?: 'horizontal' | 'vertical';
  outlined?: boolean;
  id?: string;
  currentSelect?: string;
  iconAlign?: 'left' | 'right';
  activeColor?: keyof TUiColorsType;
  handler?: (value: string) => void;
}