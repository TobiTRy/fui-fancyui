import React from 'react';
import { MenuItem } from './MenueItem.style';
import FancyContent from '../../Molecules/FancyContent/FancyContent';

interface MenueItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  label?: string;
  icon?: React.ReactNode;
}

export default function MenueItem(props: MenueItemProps) {
  const { children, label, icon, ...HTMLProps } = props;
  return (
    <MenuItem {...HTMLProps}>
      <FancyContent flexAlign='flex-start'>
        <FancyContent.Title bold={false}>{label}</FancyContent.Title>
        <FancyContent.Icon>{icon}</FancyContent.Icon>
      </FancyContent>
      {children}
    </MenuItem>
  );
}
