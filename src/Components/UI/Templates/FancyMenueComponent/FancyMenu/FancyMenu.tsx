import React from 'react';

import FancyMenuItem from '../FancyMenuItem/FancyMenuItem';
import ListDivider from '../../../../Atoms/ListDivider/ListDivider';
import MenuList from '../../../Molecules/MenuList/MenuList';

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
