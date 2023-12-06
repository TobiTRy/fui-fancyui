import { styled, css } from 'styled-components';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TSpacings } from '@/interface/TSpacings';
import { TTextAlignLR } from '@/interface/TTextAlignLR';

import { getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent';
import { boxShadow } from '@/design/designFunctions/shadows/shadows';

// this container wraps the whole component
interface IWrapper {
  $size?: TSpacings;
  $gapSpacing?: TSpacings;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  theme: TTheme;
  $shadow?: boolean;
}
export const Wrapper = styled.div<IWrapper>`
  display: inline-flex;
  align-items: center;
  padding: ${({ $size, theme }) => ($size ? theme.spacing[$size] : '')};
  gap: ${({ $gapSpacing, theme }) => ($gapSpacing ? theme.spacing[$gapSpacing] : ({ theme }) => theme.spacing.xxs)};
  ${({ $themeType = 'primary', $layer = 2, theme }) => getColorsForComponent({ $themeType, $layer, theme })};
  ${({ $shadow }) => $shadow && boxShadow.sm}
  border-radius: ${({ theme }) => theme.borderRadius.complete};
`;

// this container wraps the texts (Heading, Subheading)
interface ITextWrapper {
  $alignText?: TTextAlignLR;
  $paddingToedge: TSpacings;
  theme: TTheme;
}
export const TextWrapper = styled.div<ITextWrapper>`
  // if alignText is left, then the order of the text is reversed
  ${({ $alignText, $paddingToedge, theme }) =>
    $alignText === 'left'
      ? css`
          order: -1;
          text-align: right;
          margin-left: ${theme.spacing[$paddingToedge]};
        `
      : css`
          margin-right: ${theme.spacing[$paddingToedge]};
        `}
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
