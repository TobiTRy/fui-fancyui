import React from 'react';
import { MenuItem } from './MenueItem.style';
import FancyContent from '../../Molecules/FancyContent/FancyContent';

interface MenueItemProps extends Omit<React.ComponentProps<typeof MenuItem>, 'theme'>  {
  label?: string;
  icon?: React.ReactNode;
  as: 'a' | 'button';
}

export default function MenueItem(props: MenueItemProps) {
  const { label, icon, ...HTMLProps } = props;
  return (
    <MenuItem {...HTMLProps}>
      <FancyContent flexAlign='flex-start'>
        <FancyContent.Title bold={false}>{label}</FancyContent.Title>
        <FancyContent.Icon>{icon}</FancyContent.Icon>
      </FancyContent>
    </MenuItem>
  );
}
