import { styled, css } from 'styled-components';
import { fontSize, spacingPx, uiColors } from '../../Design/design';
import { boxShadow, textShadow } from '../../Design/shadows';

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

export const Button = styled.button<{ $isOpen: boolean }>`
  position: relative;
  background-color: ${uiColors.accent.main};
  color: ${uiColors.accent.contrast};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 100%;
  width: 100%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: box-shadow 0.3s ease;
  ${boxShadow.medium}

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    font-size: 24px;
    transform-origin: 50% 50%;
    transform: ${({ $isOpen }) => ($isOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) rotate(0)')};
    transition: transform 0.3s ease;
  }
`;

export const Ring = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  height: ${SpeedDailButtonSize + 'px'};
  width: ${SpeedDailButtonSize + 'px'};
  border: 1.5px solid ${uiColors.accent.main};
  border-radius: 50%;
  z-index: 4;
  top: 50%;
  right: 50%;
  transform: ${({ $isOpen }) => ($isOpen ? 'translate(50%, -50%) scale(1.12)' : 'translate(50%, -50%) scale(0.9)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out, transform 0.3s ease;
  pointer-events: none;
`;

export const Label = css<{ $isOpen: boolean; $labelAlign?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${uiColors.secondary.main};
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.5s ease-in-out, right 0.3s ease, left 0.3s ease;
  ${textShadow.medium}
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

export const MenueItemWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: ${spacingPx.lg};
  transform: translateX(-50%);
`;

export const MenueItemContainer = styled.div<{ $isOpen: boolean; $index: number }>`
  position: absolute;
  left: 50%;
  border-radius: 50%;
  bottom: ${({ $index }) => `calc(${($index + 1) * 60}px)`};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) scale(1) translateX(-50%)' : `translateY(50px) scale(0) translateX(-50%)`)};
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
  transition-delay: ${({ $isOpen, $index }) => ($isOpen ? 0.1 * $index : 0.1 * (2 - $index))}s;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transform: translate(-50%);
  height: 40px;
  width: 40px;
  box-shadow: #19191980 0 0 15px;
`;

export const MenuItem = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  color: ${uiColors.secondary.main};
  cursor: pointer;
  font-size: ${fontSize.medium};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: #495057;
  transition: 150ms ease-in-out;

  svg {
    width: 50%;
    height: 50%;
  }

  &:hover {
    transform: scale(1.01);
    background-color: ${uiColors.primary.lighter};
  }
`;
