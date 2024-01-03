import { css } from 'styled-components';

import { TFontSizes } from '@/types/IFontSizes';
import { TTheme } from '@/types/TTheme';

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

  const getLineHeight = (addLineHeight: boolean) => {
    if (addLineHeight) {
      return 1.4;
    }

    return 1;
  };

  return {
    h1: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h1, desktop.headings.h1)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    h2: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h2, desktop.headings.h2)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    h3: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h3, desktop.headings.h3)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    h4: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h4, desktop.headings.h4)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    h5: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h5, desktop.headings.h5)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    h6: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.headings.h6, desktop.headings.h6)}
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    button: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.button, desktop.textElements.button)}
      font-weight: bold;
      letter-spacing: 0.4px;
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    label: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.label, desktop.textElements.label)}
      font-weight: 400;
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    inlineElement: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.caption, desktop.textElements.caption)}
      font-weight: 400;
      line-height: ${getLineHeight(addLineHeight ?? false)};
    `,
    content: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.caption, desktop.textElements.caption)}
      font-weight: 400;
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    smText: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.smText, desktop.textElements.smText)}
      font-weight: 400;
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
    verysmText: css`
      ${nullifyStyle};
      ${responsiveFontSize(mobile.textElements.verysmText, desktop.textElements.verysmText)}
      font-weight: 400;
      line-height: ${getLineHeight(addLineHeight ?? true)};
    `,
  };
};
