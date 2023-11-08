import React from 'react';

import MenueItem from '../../../Atoms/MenuItem/MenueItem';
import FancyContent from '../../../Molecules/FancyContent/FancyContent';


type TFancyMenueItemProps = {
  label?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof MenueItem>;
// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenuItem(props: TFancyMenueItemProps) {
  const { label, icon, ...menuItemProps } = props;
  return (
    <MenueItem {...menuItemProps}>
      <FancyContent flexAlign="flex-start">
        <FancyContent.Title bold={false}>{label}</FancyContent.Title>
        <FancyContent.Icon>{icon}</FancyContent.Icon>
      </FancyContent>
    </MenueItem>
  );
}

