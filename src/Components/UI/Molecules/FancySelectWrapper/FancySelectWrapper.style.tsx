import { CSSProp, css, styled } from 'styled-components';

import { TTheme } from '@/Components/UI/Interface/TTheme';
import { TAlign, TAlignCheckbox } from '../FancyCheckbox/FancyCheckbox.model';

// wraps the whole component and handles the alignment
export const Wrapper = styled.div<{ $align?: TAlign; $externalStyle: CSSProp }>`
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
  ${({ $externalStyle }) => $externalStyle}
`;

// this wraps the label and the description
// handle the order of the checkbox and label/description
export const LabelWrapper = styled.label<{ $align?: TAlignCheckbox; theme: TTheme }>`
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
    margin-left: ${({ theme }) => theme.spacing.xxs};
  }
`;
