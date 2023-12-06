import React from 'react';

import { MenuItem } from '@/components/atoms/MenuItem';
import { FancyContent } from '@/components/molecules/FancyContent';

type TFancyMenueItemProps = {
  label?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof MenuItem>;
// --------------------------------------------------------------------------- //
// ---------- The FancyMenueItem is a template for a finished Item  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyMenuItem(props: TFancyMenueItemProps) {
  const { label, icon, ...menuItemProps } = props;
  return (
    <MenuItem {...menuItemProps}>
      <FancyContent flexAlign="flex-start">
        <FancyContent.Title bold={false}>{label}</FancyContent.Title>
        <FancyContent.Icon>{icon}</FancyContent.Icon>
      </FancyContent>
    </MenuItem>
  );
}
