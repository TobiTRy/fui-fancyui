import React from 'react';

import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from "@/Components/UI/Interface/TLayer";
import { MenuContainer } from './MenuList.style';

export interface MenuListProps {
  children?: React.ReactNode;
  themeType?: TUiColors;
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
