import { styled } from 'styled-components';
import { TFloatingButton } from './TFloatingButton.model';
import { sizeSettings } from './sizeSettings';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { TTheme } from '@/types/TTheme';
import { globalElementSizes } from '@/design/theme/globalSizes';
import { TStyledPrefixAndPicker } from '@/types';
import { generateThemeDesignForComponent } from '@/design/designFunctions/generateThemeDesignForComponent';

export const Wrapper = styled.div<TStyledPrefixAndPicker<TFloatingButton, 'size'>>`
  position: relative;
  width: ${({ $size = 'sm' }) => parseInt(globalElementSizes[sizeSettings[$size].height]) + 12 + 'px'};
  height: ${({ $size = 'sm' }) => parseInt(globalElementSizes[sizeSettings[$size].height]) + 12 + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TButton = {
  $isOpen: boolean;
  theme?: TTheme;
} & TStyledPrefixAndPicker<TFloatingButton, 'size' | 'themeType' | 'outline' | 'layer'>;

export const Button = styled.button<TButton>`
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: ${({ $size = 'sm' }) => globalElementSizes[sizeSettings[$size].height]};
  height: ${({ $size = 'sm' }) => globalElementSizes[sizeSettings[$size].height]};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  ${({ $layer = 0, $themeType = 'accent', $outline, theme }) =>
    generateThemeDesignForComponent({
      $layer,
      $themeType,
      $outlined: $outline,
      theme,
      $backgroundState: 'hover',
    })};

  ${boxShadow.sm}
  transition:
    background-color 0.125s ease-in-out,
    color 0.125s ease-in-out;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.color.accent[0]};
    outline-offset: 2px;
  }

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

export const Ring = styled.div<TButton>`
  position: absolute;
  width: ${({ $size = 'sm' }) => globalElementSizes[sizeSettings[$size].height]};
  height: ${({ $size = 'sm' }) => globalElementSizes[sizeSettings[$size].height]};
  border-bottom: 1.5px solid ${({ theme, $themeType = 'accent', $layer = 0 }) => theme.color[$themeType][$layer]};
  border-top: 1.5px solid ${({ theme, $themeType = 'accent', $layer = 0 }) => theme.color[$themeType][$layer]};
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
