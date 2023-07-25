import { css } from "styled-components";
import { fontSizes } from "../../Design/design";
import brakePoints from "../../Design/brakePoints";

const nullifyStyle = css`
  margin: 0;
`;

export const fontSizeVariants = {
  h1: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h1};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h1};
    }
  `,
  h2: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h2};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h2};
    }
  `,
  h3: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h3};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h3};
    }
  `,
  h4: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h4};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h4};
    }
  `,
  h5: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h5};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h5};
    }
  `,
  h6: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.headings.h6};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.headings.h6};
    }
  `,

  button: css`
    ${nullifyStyle};
    font-size: ${fontSizes.mobile.textElements.button};

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.textElements.button};
    }
  `,
  
  caption: css`
    ${nullifyStyle};
    font-size: ${fontSizes.desktop.textElements.caption};
    font-weight: 400;

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.textElements.caption};
    }
  `,

  content: css`
    ${nullifyStyle};
    line-height: 1.25;
    font-size: ${fontSizes.mobile.textElements.caption};
    font-weight: 400;

    @media (min-width: ${brakePoints.md + 'px'}) {
      font-size: ${fontSizes.desktop.textElements.caption};
    }
  `,
};