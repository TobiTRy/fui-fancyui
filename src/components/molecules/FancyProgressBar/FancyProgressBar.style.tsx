import { css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

// Define a styled component for the progress bar wrapper
export const Wrapper = styled.div<{ $value?: number; theme: TTheme }>`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
  flex-direction: column;

  /* if the value is full set the color to accent color */
  ${({ $value, theme }) =>
    $value === 100 &&
    css`
      & label {
        color: ${theme.color.accent[0]};
      }

      & span {
        color: ${theme.color.accent[0]};
      }
    `}
`;
