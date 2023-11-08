import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { MenuContainer } from './MenuList.style';

export interface MenuListProps {
  children?: React.ReactNode;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  outlined?: boolean;
}
// --------------------------------------------------------------------------- //
// ---------------- A simple MenuList that can have any childs --------------- //
// --------------------------------------------------------------------------- //
export default function MenuList(props: MenuListProps) {
  const { children, themeType, layer, outlined } = props;
  return (
    <MenuContainer $themeType={themeType} $layer={layer} $outlined={outlined}>
      {children}
    </MenuContainer>
  );
}
