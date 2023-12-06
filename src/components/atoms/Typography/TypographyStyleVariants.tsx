import { css } from 'styled-components';

import { TFontSizes } from '@/interface/IFontSizes';
import { TTheme } from '@/interface/TTheme';

const nullifyStyle = css`
  margin: 0;
`;

// Hilfsfunktion für den Medien-Query
const responsiveFontSize = (mobileSize: string, desktopSize: string) => css<{ theme?: TTheme }>`
  font-size: ${mobileSize};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${desktopSize};
  }
`;

export const generateFontVariants = (themeFonts: TFontSizes) => {
  const { desktop, mobile } = themeFonts;

  return {
    h1: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h1, desktop.headings.h1)}
      line-height: 1.2;
    `,
    h2: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h2, desktop.headings.h2)}
      line-height: 1.2;
    `,
    h3: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h3, desktop.headings.h3)}
      line-height: 1.2;
    `,
    h4: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h4, desktop.headings.h4)}
      line-height: 1.2;
    `,
    h5: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h5, desktop.headings.h5)}
      line-height: 1.2;
    `,
    h6: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h6, desktop.headings.h6)}
      line-height: 1.2;
    `,
    button: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.button, desktop.textElements.button)}
      font-weight: bold;
      letter-spacing: 0.4px;
    `,
    label: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.label, desktop.textElements.label)}
      font-weight: 400;
    `,
    inlineElement: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.caption, desktop.textElements.caption)}
      font-weight: 400;
    `,
    content: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.caption, desktop.textElements.caption)}
      line-height: 1.4;
      font-weight: 400;
    `,
    smText: css`
      line-height: 1.1;
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.smText, desktop.textElements.smText)}
      font-weight: 400;
    `,
    verysmText: css`
      line-height: 1;
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.verysmText, desktop.textElements.verysmText)}
      font-weight: 400;
    `,
  };
};
