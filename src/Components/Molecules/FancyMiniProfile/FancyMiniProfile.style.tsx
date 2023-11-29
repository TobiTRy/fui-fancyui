import { styled, css } from 'styled-components';

import { spacingPx } from '../../Design/designSizes';
import { TTextAlign } from './FancyMiniProfile';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import getColorsForComponent from '../../Design/color/colorCalculatorForComponet';
import { boxShadow } from '../../Design/shadows/shadows';
import { TTheme } from '@/Components/Interface/TTheme';
import { TSpacings } from '@/Components/Interface/TSpacings';

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
  padding: ${({ $size }) => ($size ? spacingPx[$size] : '')};
  gap: ${({ $gapSpacing }) => ($gapSpacing ? spacingPx[$gapSpacing] : ({ theme }) => theme.spacing.xxs)};
  ${({ $themeType = 'primary', $layer = 2, theme }) => getColorsForComponent({ $themeType, $layer, theme })};
  ${({ $shadow }) => $shadow && boxShadow.sm}
  border-radius: ${({ theme }) => theme.borderRadius.complete};
`;

// this container wraps the texts (Heading, Subheading)
interface ITextWrapper {
  $alignText?: TTextAlign;
  $paddingToedge: TSpacings;
}
export const TextWrapper = styled.div<ITextWrapper>`
  // if alignText is left, then the order of the text is reversed
  ${({ $alignText, $paddingToedge }) =>
    $alignText === 'left'
      ? css`
          order: -1;
          text-align: right;
          margin-left: ${spacingPx[$paddingToedge]};
        `
      : css`
          margin-right: ${spacingPx[$paddingToedge]};
        `}
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
