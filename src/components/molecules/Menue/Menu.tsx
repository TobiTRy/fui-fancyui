'use client';

import { FancyMenuItem } from '@/components/templates/FancyMenuItem';
import { MenuContainer } from './Menu.style';
import { TMenuWithHTMLAttributes } from './TMenu.model';
import { Seperator } from '@/components/atoms/Seperator';

// --------------------------------------------------------------------------- //
// ---------------- A simple Menue that can have any childs --------------- //
// --------------------------------------------------------------------------- //
function Menu(props: TMenuWithHTMLAttributes) {
  const {
    children,
    themeType = 'primary',
    layer = 2,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    ...htmlProps
  } = props;

  return (
    <MenuContainer
      $themeType={themeType}
      $layer={layer}
      $outlined={outlined}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      $outlinedRemoveBorder={outlinedRemoveBorder}
      {...htmlProps}
    >
      {children}
    </MenuContainer>
  );
}

Menu.Item = FancyMenuItem;
Menu.Divider = Seperator;

export default Menu;
