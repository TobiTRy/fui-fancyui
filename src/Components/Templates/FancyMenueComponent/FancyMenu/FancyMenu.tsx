import React from 'react';

import FancyMenuItem from '../FancyMenuItem/FancyMenuItem';
import ListDivider from '../../../atoms/ListDivider/ListDivider';
import MenuList from '../../../molecules/MenuList/MenuList';

type TFancyMenuProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof MenuList>;
// --------------------------------------------------------------------------- //
// --- The FancyList is a Template with Anchor the Menue Item and Divider ---- //
// --------------------------------------------------------------------------- //
function FancyMenu(props: TFancyMenuProps) {
  const { children, ...menueListProps } = props;
  return <MenuList {...menueListProps}>{children}</MenuList>;
}

FancyMenu.Item = FancyMenuItem;
FancyMenu.Divider = ListDivider;

export default FancyMenu;
