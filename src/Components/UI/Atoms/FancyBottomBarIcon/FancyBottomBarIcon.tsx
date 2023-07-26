import React from 'react';
import styled, { css } from 'styled-components';

import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { IconTextButton, Icon, Underline } from './FancyBottomBarIcon.style';
import Typography from '../Typography/Typography';

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
        <Typography type='smallText'>{label}</Typography>
        <Underline $isActive={active} />
      </IconTextButton>
    </ItemWrapper>
  );
}
