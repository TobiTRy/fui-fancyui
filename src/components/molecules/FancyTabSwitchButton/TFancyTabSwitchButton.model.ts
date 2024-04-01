import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

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
  themeType?: TUiColorsMain;
  activeTextThemeType?: TUiColorsMain;
  layer?: TLayer;
  iconAlign?: 'left' | 'right';
  sizeC?: TComponentSizes;
  externalStyle?: CSSProp;
};

export type TTabSwitchButtonProps = TTabSwitchButton & TTabSwitchDetailsChildren & TTabSwitchDetailsLabelIcon;

export type TFancyTabSwitchButton = TTabSwitchButtonProps & HTMLAttributes<HTMLDivElement>;
