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

export const generateFontVariants = (themeFonts: TFontSizes, addLineHeight?: boolean) => {
  const { desktop, mobile } = themeFonts;
  const VARLineHeight = addLineHeight ? 1.4 : 1;

  return {
    h1: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h1, desktop.headings.h1)}
      line-height: ${VARLineHeight};
    `,
    h2: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h2, desktop.headings.h2)}
      line-height: ${VARLineHeight};
    `,
    h3: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h3, desktop.headings.h3)}
      line-height: ${VARLineHeight};
    `,
    h4: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h4, desktop.headings.h4)}
      line-height: ${VARLineHeight};
    `,
    h5: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h5, desktop.headings.h5)}
      line-height: ${VARLineHeight};
    `,
    h6: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h6, desktop.headings.h6)}
      line-height: ${VARLineHeight};
    `,
    button: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.button, desktop.textElements.button)}
      font-weight: bold;
      letter-spacing: 0.4px;
      line-height: ${VARLineHeight};
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
      line-height: ${VARLineHeight};
    `,
    content: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.caption, desktop.textElements.caption)}
      font-weight: 400;
      line-height: ${VARLineHeight};
    `,
    smText: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.smText, desktop.textElements.smText)}
      font-weight: 400;
      line-height: ${VARLineHeight};
    `,
    verysmText: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.verysmText, desktop.textElements.verysmText)}
      font-weight: 400;
      line-height: ${VARLineHeight};
    `,
  };
};
