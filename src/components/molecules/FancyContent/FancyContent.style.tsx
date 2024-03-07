import { css, styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TFancyContentProps } from '@/components/molecules/FancyContent/FancyContent.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Define the types for the Wrapper component
type TWrapper = TStyledPrefixAndOmiter<TFancyContentProps, 'children'>;

// Define the Wrapper component
export const Wrapper = styled.span<TWrapper & { theme: TTheme }>`
  display: inline-flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gapBetweenIcon }) => arrayToCssValues($gapBetweenIcon ?? 'xss', 'spacing')};
  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.colors[$themeType ?? 'secondary'][$layer ?? 0]};
    `};

  ${({ $externalStyle }) => $externalStyle}

  .content {
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) => $align || 'center'};
    justify-content: flex-start;
    gap: ${({ $gapBetweenIcon }) => arrayToCssValues($gapBetweenIcon ?? 'xss', 'spacing')};
  }
`;

type TOnlyTextWrapper = TStyledPrefixAndPicker<
  TFancyContentProps,
  'direction' | 'gapBetweenText' | 'align' | 'justify' | 'themeType' | 'layer'
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
      color: ${theme.colors[$themeType ?? 'secondary'][$layer ?? 0]};
    `};
`;
