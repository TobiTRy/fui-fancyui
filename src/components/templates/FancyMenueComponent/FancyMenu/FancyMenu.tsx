import React from 'react';

import { ListDivider } from '@/components/atoms/ListDivider';
import { MenuList } from '@/components/molecules/MenuList';
import { FancyMenuItem } from '@/components/templates/FancyMenueComponent/FancyMenuItem';

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
