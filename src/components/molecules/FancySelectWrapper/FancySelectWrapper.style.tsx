import { CSSProp, css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TTextAlignLR } from '@/types/TTextAlignLR';

// this wraps the label and the description
// handle the order of the checkbox and label/description
export const LabelWrapper = styled.label<{
  theme: TTheme;
  $align?: TTextAlignLRC;
  $externalStyle: CSSProp;
}>`
  display: flex;

  gap: ${({ theme }) => theme.spacing.xxs};

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
  ${({ $externalStyle }) => $externalStyle}

  .description {
    margin-left: ${({ theme }) => parseInt(theme.spacing.xxs) - 2 + 'px'};
  }
`;

export const InputWrapper = styled.div<{ $alignInput?: TTextAlignLR; theme: TTheme }>`
  margin-top: 4px;
  height: fit-content;

  ${({ $alignInput, theme }) =>
    $alignInput === 'right'
      ? css`
          order: 1;
          gap: ${theme.spacing.xs};
        `
      : css`
          order: -1;
          gap: ${theme.spacing.xs};
        `};
`;
