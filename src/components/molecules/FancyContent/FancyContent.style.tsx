import { css, styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TFancyContent } from '@/components/molecules/FancyContent/FancyContent.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTextAlignLRC, TAlignItemsValues } from '@/types';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

// Define the types for the Wrapper component
type TWrapper = TStyledPrefixAndOmiter<TFancyContent, 'children'> & {
  $hasDescription?: boolean;
  $hasIcon?: boolean;
  $hasTitle?: boolean;
  $align?: TAlignItemsValues;
  $justify?: TTextAlignLRC;
};

// Helper function to get justify-self value
const getJustifySelf = (justify?: TTextAlignLRC, layoutMode?: string, defaultValue: string = 'start') => {
  // When justify is explicitly set, let the grid-level justify-items handle alignment
  // This prevents conflicts between justify-items and justify-self
  if (justify) {
    return 'auto'; // Let justify-items from the grid container handle the alignment
  }
  return layoutMode === 'stack' ? 'center' : defaultValue;
};

// Helper function to convert justify values to CSS values
const justifyToCss = (justify?: TTextAlignLRC) => {
  return justify === 'left' ? 'start' : justify === 'right' ? 'end' : 'center';
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
    case 'row':
      // Text in row mode: ICON | Title | Description
      if (hasTitle && hasDescription) {
        if (hasIcon) {
          return css`
            grid-template-columns: ${alignIcon === 'right' ? 'auto auto auto' : 'auto auto auto'};
            grid-template-rows: auto;
            grid-template-areas: ${alignIcon === 'right' ? '"title description icon"' : '"icon title description"'};
          `;
        } else {
          return css`
            grid-template-columns: auto auto;
            grid-template-rows: auto;
            grid-template-areas: 'title description';
          `;
        }
      }
      // Fallback to normal layout if not both title and description
      return css`
        grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
        grid-template-rows: auto;
        grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
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
    case 'span':
      // Icon spans both title and description rows
      if (hasIcon && hasTitle && hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto auto;
          grid-template-areas: ${alignIcon === 'right'
            ? '"title icon" "description icon"'
            : '"icon title" "icon description"'};
        `;
      }
      // Fallback to normal layout if not both title and description
      return css`
        grid-template-columns: ${alignIcon === 'right' && hasIcon ? '1fr auto' : 'auto 1fr'};
        grid-template-rows: auto;
        grid-template-areas: ${hasIcon ? (alignIcon === 'right' ? '"title icon"' : '"icon title"') : '"title title"'};
      `;
    case 'inline':
      // Icon and title on same line, description below
      if (hasIcon && hasTitle && hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto auto;
          grid-template-areas: ${alignIcon === 'right'
            ? '"title icon" "description description"'
            : '"icon title" "description description"'};
        `;
      }
      // If no description, just icon and title on same line
      if (hasIcon && hasTitle && !hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${alignIcon === 'right' ? '"title icon"' : '"icon title"'};
        `;
      }
      // If no title but has description, use description in title position
      if (hasIcon && !hasTitle && hasDescription) {
        return css`
          grid-template-columns: ${alignIcon === 'right' ? '1fr auto' : 'auto 1fr'};
          grid-template-rows: auto;
          grid-template-areas: ${alignIcon === 'right' ? '"title icon"' : '"icon title"'};
        `;
      }
      // Fallback without icon
      return css`
        grid-template-columns: 1fr;
        grid-template-rows: ${hasTitle && hasDescription ? 'auto auto' : 'auto'};
        grid-template-areas: ${hasTitle && hasDescription ? '"title" "description"' : '"title"'};
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
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  column-gap: ${({ $gapBetweenIcon }) => arrayToCssValues($gapBetweenIcon, 'spacing')};
  row-gap: 0;
  align-items: ${({ $align }) => $align || 'start'};

  ${({ $layoutMode = 'auto', $hasDescription = false, $hasIcon = false, $hasTitle = false, $alignIcon = 'left' }) =>
    getGridTemplate($layoutMode, $hasDescription, $hasIcon, $hasTitle, $alignIcon)}

  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};

  ${({ $justify }) =>
    $justify &&
    css`
      justify-items: ${$justify === 'left' ? 'start' : $justify === 'right' ? 'end' : 'center'};
    `};

  ${({ $externalStyle }) => $externalStyle}

  .icon {
    grid-area: icon;
    justify-self: ${({ $layoutMode, $justify }) => getJustifySelf($justify, $layoutMode, 'start')};
    align-self: ${({ $layoutMode }) => ($layoutMode === 'stack' ? 'start' : 'center')};
  }

  .content {
    display: contents;
  }

  .title {
    grid-area: title;
    align-self: ${({ $layoutMode }) => ($layoutMode === 'stack' ? 'start' : 'center')};
    justify-self: ${({ $layoutMode, $justify }) => getJustifySelf($justify, $layoutMode, 'start')};
  }

  .description {
    grid-area: description;
    justify-self: ${({ $layoutMode, $justify }) => getJustifySelf($justify, $layoutMode, 'start')};
    margin-top: ${({ $gapBetweenText, $layoutMode }) =>
      $layoutMode === 'stack' || $layoutMode === 'row' ? '0' : arrayToCssValues($gapBetweenText, 'spacing')};
  }
`;

type TOnlyTextWrapper = TStyledPrefixAndPicker<
  TFancyContent,
  'themeType' | 'layer' | 'externalStyle' | 'layoutMode' | 'gapBetweenText'
> & {
  $justify?: TTextAlignLRC;
  $align?: TAlignItemsValues;
  $wide?: boolean;
};

export const OnlyTextWrapper = styled.span<TOnlyTextWrapper & { theme: TTheme }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ $gapBetweenText }) => arrayToCssValues($gapBetweenText, 'spacing')};
  align-items: ${({ $align }) => $align || 'start'};
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  ${({ $justify }: { $justify?: TTextAlignLRC }) =>
    $justify &&
    css`
      justify-items: ${justifyToCss($justify)};
    `};

  ${({ theme, $themeType, $layer }) =>
    $themeType &&
    css`
      color: ${theme.color[$themeType ?? 'secondary'][$layer ?? 0]};
    `};
  ${({ $externalStyle }) => $externalStyle}
`;
