import { css, styled } from 'styled-components';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { TTheme } from '@/types/TTheme';
import { RawUL } from '@/components/atoms/RawUL';
import { TComponentSizes } from '@/types/TComponentSizes';
import { globalElementsizes } from '@/design/theme/globalSizes';

const SpeedDailButtonSize = 60;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SpeedDailButtonSize + 12 + 'px'};
  height: ${SpeedDailButtonSize + 12 + 'px'};
`;

export const SpeedDialContainer = styled.div`
  position: relative;
  height: ${SpeedDailButtonSize + 'px'};
  width: ${SpeedDailButtonSize + 'px'};
`;

export const Button = styled.button<{ $isOpen: boolean; theme?: TTheme }>`
  position: relative;
  background-color: ${({ theme }) => theme.color.accent[0]};
  color: ${({ theme }) => theme.color.secondary[0]};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 100%;
  width: 100%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  ${boxShadow.sm}

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    font-size: 24px;
    transform-origin: 50% 50%;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(0)'};
    transition: transform 0.3s ease;
  }
`;

export const Ring = styled.div<{ $isOpen: boolean; theme?: TTheme }>`
  position: absolute;
  height: ${SpeedDailButtonSize + 'px'};
  width: ${SpeedDailButtonSize + 'px'};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.accent[0]};
  border-top: 1.5px solid ${({ theme }) => theme.color.accent[0]};
  border-left: solid transparent;
  border-right: solid transparent;
  border-radius: 50%;
  z-index: 49;
  top: 50%;
  right: 50%;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translate(50%, -50%) scale(1.12) rotate(125deg)' : 'translate(50%, -50%) scale(0.9) rotate(20deg)'};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  pointer-events: none;
`;

export const MenueItemWrapper = styled.div<{ theme: TTheme; $textAlign?: 'left' | 'right' }>`
  ${({ $textAlign }) =>
    $textAlign === 'right'
      ? css`
          align-items: flex-start;
          margin-left: ${'-' + parseInt(globalElementsizes.md) / 2 + 'px'};
        `
      : css`
          align-items: flex-end;
          margin-left: ${parseInt(globalElementsizes.md) / 2 + 'px'};
        `}

  position: absolute;
  left: 50%;
  width: 0;
  transform: translate(-50%);
  display: flex;
  flex-direction: column-reverse;
  gap: 18px;
  bottom: 75px;
`;

type TMenueItemContainer = {
  $isOpen?: boolean;
  $index: number;
  $actionItemSize: TComponentSizes;
};

export const MenueItemContainer = styled.div<TMenueItemContainer>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    transform 0.25s ease-in-out,
    opacity 0.25s ease-in-out;
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? 0.1 * $index : 0.1 * (2 - $index))}s;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  ${boxShadow.sm};
`;

export const ItemsList = styled(RawUL)``;
