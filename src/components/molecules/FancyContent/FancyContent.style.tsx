import { css, styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TFancyContentProps } from '@/components/molecules/FancyContent/FancyContent.model';
import IStyledPrefixAndOmitter from '@/types/IStyledPrefixAndOmiter';

// Define the types for the Wrapper component
type TWrapper = IStyledPrefixAndOmitter<TFancyContentProps, 'children'>;

// Define the Wrapper component
export const Wrapper = styled.span<TWrapper & { theme: TTheme }>`
  display: inline-flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gapBetweenIcon, theme }) => $gapBetweenIcon ?? theme.spacing.xxs};
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
    gap: ${({ $gapBetweenText, theme }) => $gapBetweenText ?? theme.spacing.xxs};
  }
`;

type TOnlyTextWrapper = IStyledPrefixAndPicker<
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
