import { createGlobalStyle } from 'styled-components';
import { TUiColorsType } from './Components/UI/Design/color/designColor';

const GlobalStyle = createGlobalStyle<{ theme: TUiColorsType }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.primary[0]};
    color: ${({ theme }) => theme.secondary[0]};
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
