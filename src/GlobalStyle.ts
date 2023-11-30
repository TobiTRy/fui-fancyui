import { createGlobalStyle } from 'styled-components';

import { TTheme } from '@/interface/TTheme';

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

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #3d3d3da9;
      border-radius: 12px;
      border: 1px solid transparent;
      background-clip: content-box;
    }
  }
`;

export default GlobalStyle;
