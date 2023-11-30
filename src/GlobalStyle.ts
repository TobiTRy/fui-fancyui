import { createGlobalStyle } from 'styled-components';

import { TTheme } from '@/components/Interface/TTheme';

const GlobalStyle = createGlobalStyle<{ theme: TTheme }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.primary[0]};
    color: ${({ theme }) => theme.colors.secondary[0]};
    font-family: DMSans, Helvetica, Sans-Serif;

    .App {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow-y: auto;
      color: white;
    };
  }
`;

export default GlobalStyle;
