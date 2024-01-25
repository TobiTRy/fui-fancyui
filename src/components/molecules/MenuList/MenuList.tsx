import React from 'react';

import { TLayer } from '@/types/TLayer';
import { MenuContainer } from './MenuList.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface MenuListProps {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
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
