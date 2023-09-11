import styled, { css } from "styled-components";
import { fontSize, uiColors } from "../../Design/design";
import { textShadow } from "../../Design/shadows";

export const MenuItem = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  color: ${uiColors.secondary[0]};
  cursor: pointer;
  font-size: ${fontSize.md};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: ${uiColors.primary[2]};
  transition: 150ms ease-in-out;

  svg {
    width: 50%;
    height: 50%;
  }

  &:hover {
    transform: scale(1.01);
    background-color: ${uiColors.accent[2]};
  }
`;


export const Label = css<{ $isOpen: boolean; $labelAlign?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${uiColors.secondary[0]};
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out, right 0.3s ease, left 0.3s ease;
  ${textShadow.md}
  white-space: nowrap;

  ${({ $labelAlign }) =>
    $labelAlign === 'right'
      ? css`
          left: 100%;
          margin-left: 10px;
        `
      : css`
          right: 100%;
          margin-right: 10px;
        `}
`;