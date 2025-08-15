import { FancyBox } from '@/components/atoms/FancyBox';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types';
import { styled } from 'styled-components';

export const StyledContainer = styled.div<{ $position: string }>`
  position: relative;
  display: flex;
  min-height: 60px;
  width: 100%;
  height: 100%;
  align-items: center;

  ${({ $position }) => {
    // Vertical alignment for container content
    let alignItems = 'center';
    if ($position.includes('top')) {
      alignItems = 'flex-start';
    } else if ($position.includes('bottom')) {
      alignItems = 'flex-end';
    }

    return `align-items: ${alignItems};`;
  }}
`;

export const StyledButton = styled.div<{ $position: string }>`
  position: absolute;
  z-index: 10;

  ${({ $position }) => {
    let styles = '';

    // Vertical positioning
    if ($position.includes('top')) {
      styles += 'top: 0;';
    } else if ($position.includes('bottom')) {
      styles += 'bottom: 0;';
    } else {
      styles += 'top: 50%; transform: translateY(-50%);';
    }

    // Horizontal positioning
    if ($position.includes('left')) {
      styles += 'left: 0;';
    } else if ($position.includes('right')) {
      styles += 'right: 0;';
    } else {
      styles += 'left: 50%; transform: translateX(-50%);';
      if (styles.includes('translateY')) {
        styles = styles.replace('transform: translateY(-50%);', 'transform: translate(-50%, -50%);');
      }
    }

    return styles;
  }}
`;

export const StyledContentArea = styled.div<{
  $isExpanded: boolean;
  $position: string;
}>`
  display: grid;
  grid-template-columns: ${({ $isExpanded }) => ($isExpanded ? '1fr' : '0fr')};
  overflow: hidden;
  transition:
    grid-template-columns 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  opacity: ${({ $isExpanded }) => ($isExpanded ? '1' : '0')};
  align-items: center;
  z-index: 5;
  max-width: 280px;

  ${({ $position }) => {
    if ($position.includes('right')) {
      return `
        margin-right: 60px;
        margin-left: auto;
      `;
    } else if ($position.includes('left')) {
      return `
        margin-left: 60px;
        margin-right: auto;
      `;
    }
    return `
      margin-right: 60px;
      margin-left: auto;
    `;
  }}
`;

export const StyledContentInner = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const StyledFancyBox = styled(FancyBox)<{ $isExpanded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: ${({ $isExpanded }) => ($isExpanded ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

export const ContentWrapper = styled.div<{ theme: TTheme }>`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
`;

export const StyledFancySVGAtom = styled(FancySVGAtom)<{ theme: TTheme }>`
  background-color: ${({ theme }) => getBackgroundColor({ theme, $layer: 5, $themeType: 'primary' })};
`;
