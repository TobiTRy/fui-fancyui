import React from 'react';

import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';

import { IconTextButton, Icon, Label, Underline } from './FancyBottomBarIcon.style';
import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div<{ $secondBar?: boolean }>`
  flex: 1 0 64px;
  ${({ $secondBar }) =>
    $secondBar
      ? css`
          padding-bottom: ${0 + 'px'};
          margin-bottom: 4px;
        `
      : null};
`;

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, color, active, handler, disabled, secondBar } = props;

  return (
    <ItemWrapper $secondBar={secondBar}>
      <IconTextButton $color={color} $isActive={active} disabled={disabled} onClick={handler}>
        <Icon>{icon}</Icon>
        <Label>{label}</Label>
        <Underline $isActive={active} />
      </IconTextButton>
    </ItemWrapper>
  );
}
