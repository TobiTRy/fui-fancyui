'use client';

import { SideBarItem } from '@/components/molecules/SideBarItem';
import { TFancySideBarItem } from './TFancySideBarItem.model';

// --------------------------------------------------------------------------- //
// ---------- The FancySideBarItem is template of the SideBarItem ------------ //
// --------------------------------------------------------------------------- //
export default function FancySideBarItem(props: TFancySideBarItem) {
  const { icon, label, sizeC, iconSettings, typographySettings, ...sideBarItemProps } = props;

  return (
    <SideBarItem sizeC={sizeC} {...sideBarItemProps}>
      <SideBarItem.Icon sizeC={sizeC} {...iconSettings}>
        {icon}
      </SideBarItem.Icon>
      <SideBarItem.Label sizeC={sizeC} {...typographySettings}>
        {label}
      </SideBarItem.Label>
    </SideBarItem>
  );
}
