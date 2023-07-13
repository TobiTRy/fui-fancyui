import React from 'react';

import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';

import { IconTextButton, Icon, Label, Underline } from './FancyBottomBarIcon.style';

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, color, active, handler, disabled } = props;

  return (
    <IconTextButton $color={color} $isActive={active} disabled={disabled} onClick={handler}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
      <Underline $isActive={active} />
    </IconTextButton>
  );
}
