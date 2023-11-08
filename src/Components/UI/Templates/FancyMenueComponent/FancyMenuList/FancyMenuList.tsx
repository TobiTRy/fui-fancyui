import React from 'react';

import FancyMenuItem from '../FancyMenuItem/FancyMenuItem';
import ListDivider from '../../../Atoms/ListDivider/ListDivider';
import MenuList from '../../../Molecules/MenuList/MenuList';

type TFancyMenuListProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof MenuList>;
// --------------------------------------------------------------------------- //
// --- The FancyList is a Template with Anchor the Menue Item and Divider ---- //
// --------------------------------------------------------------------------- //
function FancyMenuList(props: TFancyMenuListProps) {
  const { children, ...menueListProps} = props;
  return <MenuList {...menueListProps}>{children}</MenuList>;
}

FancyMenuList.Item = FancyMenuItem;
FancyMenuList.Divider = ListDivider;



export default FancyMenuList;