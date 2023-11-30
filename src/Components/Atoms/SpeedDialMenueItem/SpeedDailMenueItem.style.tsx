import styled, { css } from 'styled-components';

import { fontSize } from '../../../design/theme/designSizes';
import { boxShadow, textShadow } from '../../../design/designFunctions/shadows/shadows';
import { TTheme } from '@/interface/TTheme';

export const MenueItemContainer = styled.div<{ $isOpen?: boolean; $index: number }>`
  position: absolute;
  left: 50%;
  border-radius: 50%;
  bottom: ${({ $index }) => `calc(${($index + 1) * 60}px)`};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) scale(1) translateX(-50%)' : `translateY(50px) scale(0) translateX(-50%)`)};
  transition:
    transform 0.25s ease-in-out,
    opacity 0.25s ease-in-out;
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? 0.1 * $index : 0.1 * (2 - $index))}s;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transform: translate(-50%);
  height: 40px;
  width: 40px;
  ${boxShadow.sm};
`;

export const MenuItem = styled.button<{ theme: TTheme }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  color: ${({ theme }) => theme.colors.secondary[0]};
  cursor: pointer;
  font-size: ${fontSize.md};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary[2]};
  transition: 150ms ease-in-out;

  svg {
    width: 50%;
    height: 50%;
  }

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.accent[2]};
  }
`;

export const Label = css<{ $isOpen: boolean; $labelAlign?: 'left' | 'right'; theme: TTheme }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary[0]};
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    opacity 0.5s ease-in-out,
    right 0.3s ease,
    left 0.3s ease;
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
