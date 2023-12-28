import { createGlobalStyle } from 'styled-components';
import { scrollbar } from '@/design/theme/globalStyle/scrollbar/index';

import { TTheme } from '@/interface/TTheme';

const GlobalStyle = createGlobalStyle<{ theme: TTheme }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.primary[0]};
    color: ${({ theme }) => theme.colors.secondary[0]};
    font-family: DMSans, Helvetica, Sans-Serif;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

    
    .App {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow-y: auto;
    };
    
  }
  ${scrollbar};
`;

export default GlobalStyle;
