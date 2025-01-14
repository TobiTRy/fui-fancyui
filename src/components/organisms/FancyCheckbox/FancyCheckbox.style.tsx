import { css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TTextAlignLR } from '@/types/TTextAlignLR';

// wraps the whole component and handles the alignment
export const Wrapper = styled.div<{ $align?: TTextAlignLRC }>`
  position: relative;
  display: flex;
  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};
`;

// this wraps the label and the description
// handle the order of the checkbox and label/description
export const LabelWrapper = styled.label<{ $align?: TTextAlignLR; theme: TTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
  ${({ $align, theme }) =>
    $align === 'right'
      ? css`
          margin-right: ${theme.spacing.sm};
          order: 0;
        `
      : css`
          margin-left: ${theme.spacing.sm};
          order: 1;
        `};

  .description {
    margin-left: ${({ theme }) => parseInt(theme.spacing.xxs) - 2 + 'px'};
  }
`;
