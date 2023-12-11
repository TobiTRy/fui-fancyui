import { TTheme } from '@/interface/TTheme';
import { css } from 'styled-components';

export const breakPointStyle = css<{ theme: TTheme }>`
  .logo {
    &_text {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    .logo {
      &_text {
        display: flex;
      }
    }
  }
`;
