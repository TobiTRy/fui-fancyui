import { css, styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { TTheme } from '@/interface/TTheme';
import { TFancyContentProps } from '@/components/molecules/FancyContent/FancyContent.model';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter.model';

// Define the types for the Wrapper component
type TWrapper = IStyledPrefixAndOmitter<TFancyContentProps, 'children'>;

// Define the Wrapper component
export const Wrapper = styled.span<TWrapper & { theme: TTheme }>`
  display: inline-flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $flexJustify }) => $flexJustify || 'center'};
  align-items: ${({ $flexAlign }) => $flexAlign || 'center'};
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
    justify-content: center;
    align-items: flex-start;
    gap: ${({ $gapBetweenText, theme }) => $gapBetweenText ?? theme.spacing.xxs};
  }
`;

type TOnlyTextWrapper = IStyledPrefixAndPicker<
  TFancyContentProps,
  'flexDirection' | 'gapBetweenText' | 'flexAlign' | 'flexJustify' | 'themeType' | 'layer'
>;
export const OnlyTextWrapper = styled.span<TOnlyTextWrapper & { theme: TTheme }>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  justify-content: ${({ $flexJustify }) => $flexJustify || 'center'};
  align-items: ${({ $flexAlign }) => $flexAlign || 'flex-start'};
  gap: ${({ $gapBetweenText, theme }) => $gapBetweenText ?? theme.spacing.xxs};
  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.colors[$themeType ?? 'secondary'][$layer ?? 0]};
    `};
`;
