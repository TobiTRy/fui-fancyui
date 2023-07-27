import styled from "styled-components";
import {  spacing, uiColors } from "../../Design/design";
import { disabledStyle } from "../../HelperFunctions/disableStyle";

export const IconTextButton = styled.button<{ $color?: string; $isActive?: boolean; $disabled?: boolean }>`
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

export const Underline = styled.i<{ $isActive?: boolean }>`
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

export const Icon = styled.div`
  height: 18px;
  width: 18px;

  svg {
    height: 100%;
    width: 100%;
  }
`;
