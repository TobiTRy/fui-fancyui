import { css, styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TFancyContent } from '@/components/molecules/FancyContent/FancyContent.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Define the types for the Wrapper component
type TWrapper = TStyledPrefixAndOmiter<TFancyContent, 'children'> & {
  $hasDescription?: boolean;
  $hasIcon?: boolean;
  $hasTitle?: boolean;
};

// Helper function to determine grid template based on layout mode
const getGridTemplate = (
  layoutMode: string,
  hasDescription: boolean,
  hasIcon: boolean,
  hasTitle: boolean,
  alignIcon: string = 'left'
) => {
  switch (layoutMode) {
    case 'stack':
      return css`
        grid-template-columns: 1fr;
        grid-template-rows: repeat(
          ${hasIcon && (hasTitle || hasDescription) ? (hasTitle && hasDescription ? 3 : 2) : 1},
          auto
        );
        grid-template-areas: ${hasIcon && hasTitle && hasDescription
          ? '"icon" "title" "description"'
          : hasIcon && (hasTitle || hasDescription)
            ? '"icon" "title"'
            : '"title"'};
        justify-items: center;
        text-align: center;
      `;
    case 'normal':
      // If no title but has description, use description in title position
      if (!hasTitle && hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
        `;
      }
      // If no description or description in title position
      if (!hasDescription || (!hasTitle && hasDescription)) {
        return css`
          grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
        `;
      }
      // Normal case with both title and description
      return css`
        grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
        grid-template-rows: auto auto;
        grid-template-areas: ${hasIcon
          ? alignIcon === 'right'
            ? '"title icon" "description ."'
            : '"icon title" ". description"'
          : '"title title" "description description"'};
      `;
    default: // 'auto'
      // If no title but has description, use description in title position
      if (!hasTitle && hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
        `;
      }
      // If no description or description in title position
      if (!hasDescription || (!hasTitle && hasDescription)) {
        return css`
          grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
        `;
      }
      // Normal case with both title and description
      return css`
        grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
        grid-template-rows: auto auto;
        grid-template-areas: ${hasIcon
          ? alignIcon === 'right'
            ? '"title icon" "description ."'
            : '"icon title" ". description"'
          : '"title title" "description description"'};
      `;
  }
};

// Define the Wrapper component
export const Wrapper = styled.span<TWrapper & { theme: TTheme }>`
  display: grid;
  width: 100%;
  gap: ${({ $gap, $gapBetweenIcon }) => arrayToCssValues($gap || $gapBetweenIcon, 'spacing')};
  align-items: start;

  ${({ $layoutMode = 'auto', $hasDescription = false, $hasIcon = false, $hasTitle = false, $alignIcon = 'left' }) =>
    getGridTemplate($layoutMode, $hasDescription, $hasIcon, $hasTitle, $alignIcon)}

  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};

  ${({ $alignContent }) =>
    $alignContent &&
    css`
      justify-items: ${$alignContent === 'left' ? 'start' : $alignContent === 'right' ? 'end' : 'center'};
    `};

  ${({ $externalStyle }) => $externalStyle}

  .icon {
    grid-area: icon;
    justify-self: ${({ $layoutMode, $alignContent }) =>
      $alignContent
        ? $alignContent === 'left'
          ? 'start'
          : $alignContent === 'right'
            ? 'end'
            : 'center'
        : $layoutMode === 'stack'
          ? 'center'
          : 'start'};
    align-self: ${({ $layoutMode }) => ($layoutMode === 'stack' ? 'start' : 'center')};
  }

  .content {
    display: contents;
  }

  .title {
    grid-area: title;
    align-self: ${({ $layoutMode }) => ($layoutMode === 'stack' ? 'start' : 'center')};
    justify-self: ${({ $layoutMode, $alignContent }) =>
      $alignContent
        ? $alignContent === 'left'
          ? 'start'
          : $alignContent === 'right'
            ? 'end'
            : 'center'
        : $layoutMode === 'stack'
          ? 'center'
          : 'start'};
  }

  .description {
    grid-area: description;
    justify-self: ${({ $layoutMode, $alignContent }) =>
      $alignContent
        ? $alignContent === 'left'
          ? 'start'
          : $alignContent === 'right'
            ? 'end'
            : 'center'
        : $layoutMode === 'stack'
          ? 'center'
          : 'start'};
    margin-top: ${({ $gapBetweenText, $layoutMode }) =>
      $layoutMode === 'stack' ? '0' : arrayToCssValues($gapBetweenText, 'spacing')};
  }
`;

type TOnlyTextWrapper = TStyledPrefixAndPicker<
  TFancyContent,
  'themeType' | 'layer' | 'externalStyle' | 'layoutMode' | 'gap' | 'gapBetweenText'
> & {
  $alignContent?: 'left' | 'center' | 'right';
};

export const OnlyTextWrapper = styled.span<TOnlyTextWrapper & { theme: TTheme }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gap, $gapBetweenText }) => arrayToCssValues($gap || $gapBetweenText, 'spacing')};
  align-items: start;

  ${({ $alignContent }: { $alignContent?: 'left' | 'center' | 'right' }) =>
    $alignContent &&
    css`
      justify-items: ${$alignContent === 'left' ? 'start' : $alignContent === 'right' ? 'end' : 'center'};
    `};

  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};
  ${({ $externalStyle }) => $externalStyle}
`;
