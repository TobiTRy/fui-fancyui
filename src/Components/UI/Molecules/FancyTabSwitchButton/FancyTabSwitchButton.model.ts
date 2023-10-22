import { TUiColorsType } from "../../Design/color/designColor";
import { tabSwitchItemSizes } from "./FancyTabSwitchButton.style";




export interface ITabSwitchDetailsLabelIcon {
  key: string;
  label?: string;
  icon?: JSX.Element;
}

export interface ITabSwitchDetailsChildren {
  key: string;
  children?: React.ReactNode;
}


export interface ITabSwitchButton {
  disabled?: boolean;
  selected: boolean;
  onClick: (key: string) => void;
  wide?: boolean;
  themeType?: keyof TUiColorsType;
  iconAlign?: 'left' | 'right';
  size?: keyof typeof tabSwitchItemSizes;
}

export type ITabSwitchButtonProps =  ITabSwitchButton & ITabSwitchDetailsChildren & ITabSwitchDetailsLabelIcon;  