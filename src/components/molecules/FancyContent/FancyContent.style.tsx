import { css, styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TFancyContent } from '@/components/molecules/FancyContent/FancyContent.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Define the types for the Wrapper component
type TWrapper = TStyledPrefixAndOmiter<TFancyContent, 'children'>;

// Define the Wrapper component
export const Wrapper = styled.span<TWrapper & { theme: TTheme }>`
  display: inline-flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gapBetweenIcon }) => arrayToCssValues($gapBetweenIcon ?? 'xxs', 'spacing')};
  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};

  ${({ $externalStyle }) => $externalStyle}

  .content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ $directionTextGroup }) => ($directionTextGroup === 'row' ? $directionTextGroup : 'column')};
    align-items: ${({ $alignTextGroup }) => $alignTextGroup || 'center'};
    justify-content: flex-start;
    gap: ${({ $gapBetweenText }) => arrayToCssValues($gapBetweenText || 'xxs', 'spacing')};
  }
`;

type TOnlyTextWrapper = TStyledPrefixAndPicker<
  TFancyContent,
  'direction' | 'gapBetweenText' | 'align' | 'justify' | 'themeType' | 'layer' | 'externalStyle'
>;
export const OnlyTextWrapper = styled.span<TOnlyTextWrapper & { theme: TTheme }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'flex-start'};
  gap: ${({ $gapBetweenText, theme }) => $gapBetweenText ?? parseInt(theme.spacing.xxs) - 2 + 'px'};
  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};
  ${({ $externalStyle }) => $externalStyle}
`;
