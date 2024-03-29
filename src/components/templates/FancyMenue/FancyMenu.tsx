import React from 'react';

import { ListDivider } from '@/components/atoms/ListDivider';
import { Menue } from '@/components/molecules/Menue';
import { FancyMenuItem } from '@/components/templates/FancyMenuItem';

type TFancyMenuProps = React.ComponentProps<typeof Menue>;
// --------------------------------------------------------------------------- //
// --- The FancyList is a Template with Anchor the Menue Item and Divider ---- //
// --------------------------------------------------------------------------- //
function FancyMenu(props: TFancyMenuProps) {
  const { children, ...menueListProps } = props;

  return <Menue {...menueListProps}>{children}</Menue>;
}
FancyMenu.Item = FancyMenuItem;
FancyMenu.Divider = ListDivider;

export default FancyMenu;
