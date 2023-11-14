import React from 'react';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

export type IFancyBottomBarIcon = {
  id?: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  uniquekey?: string | number;
  WrapperComponent?: React.ReactElement;
};
