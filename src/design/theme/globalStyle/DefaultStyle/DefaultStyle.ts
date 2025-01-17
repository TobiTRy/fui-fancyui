import { createGlobalStyle } from 'styled-components';
import { scrollbar } from '@/design/theme/globalStyle/scrollbar/index';

import { TTheme } from '@/types/TTheme';

const DefaultStyle = createGlobalStyle<{ theme?: TTheme }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.color.primary[0]};
    color: ${({ theme }) => theme.color.secondary[0]};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    position: relative;
    overflow-y: auto;
    width: 100%;

    &::selection {
      background: ${({ theme }) => theme.color.accent[0]};
      color: ${({ theme }) => theme.color.primary[0]};
    }
  }
  
  ${scrollbar};
`;

export default DefaultStyle;
