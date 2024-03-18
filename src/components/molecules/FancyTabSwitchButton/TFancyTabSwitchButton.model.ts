import { TUiColorTypes } from '@/types/TUiColorTypes';
import { tabSwitchItemSizes } from './sizeSettings';
import { CSSProp } from 'styled-components';
import { HTMLAttributes } from 'react';

export type TTabSwitchDetailsLabelIcon = {
  itemKey: string;
  label?: string;
  icon?: JSX.Element;
};

export type TTabSwitchDetailsChildren = {
  itemKey: string;
  children?: React.ReactNode;
};

export type TTabSwitchButton = {
  disabled?: boolean;
  selected: boolean;
  onClick?: (key: string) => void;
  themeType?: TUiColorTypes;
  iconAlign?: 'left' | 'right';
  sizeC?: keyof typeof tabSwitchItemSizes;
  externalStyle?: CSSProp;
};

export type TTabSwitchButtonProps = TTabSwitchButton & TTabSwitchDetailsChildren & TTabSwitchDetailsLabelIcon;

export type TFancyTabSwitchButton = TTabSwitchButtonProps & HTMLAttributes<HTMLDivElement>;
