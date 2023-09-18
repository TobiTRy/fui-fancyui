import React from 'react';
import { styled, css } from 'styled-components';

import { IFancyBottomBarIcon } from './FancyBottomBarIcon.model';
import { IconTextButton, Icon, Underline } from './FancyBottomBarIcon.style';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';

export const ItemWrapper = styled.div<{ $secondBar?: boolean, theme: TUiColorsType }>`
  flex: 1 0 64px;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.55));
  ${({ $secondBar }) =>
    $secondBar
      ? css`
          padding-bottom: ${0 + 'px'};
          margin-bottom: 4px;
        `
      : null};
`;

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, active, handler, disabled, secondBar } = props;

  return (
    <ItemWrapper $secondBar={secondBar}>
      <IconTextButton $isActive={active} disabled={disabled} onClick={handler}>
        <Icon>{icon}</Icon>
        <Typography type="smText">{label}</Typography>
        <Underline $isActive={active} />
      </IconTextButton>
    </ItemWrapper>
  );
}
