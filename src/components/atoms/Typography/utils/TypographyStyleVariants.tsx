import { css } from 'styled-components';

import { TTypographyObj } from '@/components/atoms/Typography/Typography.model';

const nullifyStyle = css`
  margin: 0;
`;

export type TgenerateFontVariants = {
  themeFonts: TTypographyObj;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  fontWeight?: number | string;
};

export const generateFontVariants = (props: TgenerateFontVariants) => {
  const { themeFonts, lineHeight, letterSpacing, fontWeight } = props;

  const providedStyle = {
    lineHeight,
    letterSpacing,
    fontWeight,
  };

  return {
    displayHero: css`
      ${nullifyStyle};
      ${themeFonts.displayHero};
      ${providedStyle};
    `,
    displayHeadline: css`
      ${nullifyStyle};
      ${themeFonts.displayHeadline};
      ${providedStyle};
    `,
    displayTitle: css`
      ${nullifyStyle};
      ${themeFonts.displayTitle};
      ${providedStyle};
    `,
    sectionTitle: css`
      ${nullifyStyle};
      ${themeFonts.sectionTitle};
      ${providedStyle};
    `,
    sectionSubtitle: css`
      ${nullifyStyle};
      ${themeFonts.sectionSubtitle};
      ${providedStyle};
    `,
    sectionSubsectionTitle: css`
      ${nullifyStyle};
      ${themeFonts.sectionSubsectionTitle};
      ${providedStyle};
    `,
    bodytextLg: css`
      ${nullifyStyle};
      ${themeFonts.bodytextLg};
      ${providedStyle};
    `,
    bodytextMd: css`
      ${nullifyStyle};
      ${themeFonts.bodytextMd};
      ${providedStyle};
    `,
    bodytextSm: css`
      ${nullifyStyle};
      ${themeFonts.bodytextSm};
      ${providedStyle};
    `,
    subTextCaption: css`
      ${nullifyStyle};
      ${themeFonts.subTextCaption};
      ${providedStyle};
    `,
    subTextFootnote: css`
      ${nullifyStyle};
      ${themeFonts.subTextFootnote};
      ${providedStyle};
    `,
    subTextLegal: css`
      ${nullifyStyle};
      ${themeFonts.subTextLegal};
      ${providedStyle};
    `,
    interactiveLg: css`
      ${nullifyStyle};
      ${themeFonts.interactiveLg};
      ${providedStyle};
    `,
    interactiveMd: css`
      ${nullifyStyle};
      ${themeFonts.interactiveMd};
      ${providedStyle};
    `,
    interactiveSm: css`
      ${nullifyStyle};
      ${themeFonts.interactiveSm};
      ${providedStyle};
    `,
  };
};
