import { css } from 'styled-components';
import { fontSizes } from '../../Design/designSizes';
import brakePoints from '../../Design/brakePoints';

const nullifyStyle = css`
  margin: 0;
`;

// Hilfsfunktion für den Medien-Query
const responsiveFontSize = (mobileSize: string, desktopSize: string) => css`
  font-size: ${mobileSize};

  @media (min-width: ${brakePoints.md + 'px'}) {
    font-size: ${desktopSize};
  }
`;

export const fontSizeVariants = {
  h1: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h1, fontSizes.desktop.headings.h1)}
    line-height: 1.2;
  `,
  h2: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h2, fontSizes.desktop.headings.h2)}
    line-height: 1.2;
  `,
  h3: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h3, fontSizes.desktop.headings.h3)}
    line-height: 1.2;
  `,
  h4: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h4, fontSizes.desktop.headings.h4)}
    line-height: 1.2;
  `,
  h5: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h5, fontSizes.desktop.headings.h5)}
    line-height: 1.2;
  `,
  h6: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.headings.h6, fontSizes.desktop.headings.h6)}
    line-height: 1.2;
  `,
  button: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.button, fontSizes.desktop.textElements.button)}
    font-weight: bold;
    letter-spacing: 0.4px;
  `,
  label: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.label, fontSizes.desktop.textElements.label)}
    font-weight: 400;
  `,
  inlineElement: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.caption, fontSizes.desktop.textElements.caption)}
    font-weight: 400;
  `,
  content: css`
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.caption, fontSizes.desktop.textElements.caption)}
    line-height: 1.4;
    font-weight: 400;
  `,
  smText: css`
    line-height: 1.1;
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.smText, fontSizes.desktop.textElements.smText)}
    font-weight: 400;
  `,
  verysmText: css`
    line-height: 1;
    ${nullifyStyle};
    ${responsiveFontSize(fontSizes.mobile.textElements.verysmText, fontSizes.desktop.textElements.verysmText)}
    font-weight: 400;
  `,
};
