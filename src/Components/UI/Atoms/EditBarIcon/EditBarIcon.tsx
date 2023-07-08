import React from 'react';

import styled from 'styled-components';

import { disabledStyle } from '../../HelperFunctions/disableStyle';

import { fontSize, spacing, spacingPx, uiColors } from '../../Design/design';
import { IEditBarIconButton } from './IEditBarIcon';



const IconTextButton = styled.button<{ $color?: string; $isActive?: boolean; $disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  color: ${({ $isActive }) => ($isActive ? uiColors.accent.main : uiColors.secondary.main)};
  transition: all 0.3s ease-in-out;
  ${({ disabled }) => disabled && disabledStyle}
  padding-bottom: ${spacing.xs + 2 + 'px'};


  @media (hover: hover) {
    &:hover {
      color: ${({ disabled }) => !disabled && uiColors.accent.main};
    }
  }
`;

const Underline = styled.i<{ $isActive?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  height: 1.5px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: ${({ $isActive }) => ($isActive ? uiColors.accent.main : 'transparent')};
  transition: all 0.1s ease-in-out;
`;

const Icon = styled.div`
  height: 18px;
  width: 18px;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Label = styled.p`
  margin: 0;
  margin-top: ${spacingPx.xs};
  line-height: ${fontSize.small};
  font-size: ${fontSize.small};
`;

export default function EditBarIconButton(props: IEditBarIconButton) {
  const { icon, label, color, active, handler, disabled } = props;

  return (
    <IconTextButton $color={color} $isActive={active} disabled={disabled} onClick={handler}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
      <Underline $isActive={active} />
    </IconTextButton>
  );
}
