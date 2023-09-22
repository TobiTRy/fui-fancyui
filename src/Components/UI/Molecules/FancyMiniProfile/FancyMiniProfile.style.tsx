import { styled, css } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TTextAlign } from './FancyMiniProfile';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import getColorsForComponent from '../../Design/color/colorCalculatorForComponet';

// this container wraps the whole component
interface IWrapper {
  $size?: keyof typeof spacingPx;
  $gapSpacing?: keyof typeof spacingPx;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
}
export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  padding: ${({ $size }) => ($size ? spacingPx[$size] : '')};
  gap: ${({ $gapSpacing }) => ($gapSpacing ? spacingPx[$gapSpacing] : spacingPx.xxs)};
  ${({ $themeType = 'primary', $layer, theme }) => getColorsForComponent({ $themeType, $layer, theme })};
  border-radius: ${borderRadius.complete};
`;

// this container wraps the texts (Heading, Subheading)
interface ITextWrapper {
  $alignText?: TTextAlign;
  $paddingToedge: keyof typeof spacingPx;
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
