import { CSSProp, createGlobalStyle } from 'styled-components';
import { scrollbar } from '@/design/theme/globalStyle/scrollbar/index';

import { TTheme } from '@/interface/TTheme';

const GlobalStyle = createGlobalStyle<{ theme: TTheme; externalStyle?: CSSProp }>`
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
    };

  }
  ${scrollbar};
`;

export default GlobalStyle;
