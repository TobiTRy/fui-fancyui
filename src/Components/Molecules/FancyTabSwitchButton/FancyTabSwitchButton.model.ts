import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { tabSwitchItemSizes } from './FancyTabSwitchButton.style';

export interface ITabSwitchDetailsLabelIcon {
  itemKey: string;
  label?: string;
  icon?: JSX.Element;
}

export interface ITabSwitchDetailsChildren {
  itemKey: string;
  children?: React.ReactNode;
}

export interface ITabSwitchButton {
  disabled?: boolean;
  selected: boolean;
  onClick: (key: string) => void;
  wide?: boolean;
  themeType?: TThemeTypes;
  iconAlign?: 'left' | 'right';
  size?: keyof typeof tabSwitchItemSizes;
}

export type ITabSwitchButtonProps = ITabSwitchButton & ITabSwitchDetailsChildren & ITabSwitchDetailsLabelIcon;
