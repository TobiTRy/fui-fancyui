import { CSSProp, css, styled } from 'styled-components';

import {
  TFancyGridTemplate,
  TGridAreasBreakpoints,
} from '@/components/templates/FancyGridTemplate/TFancyGridTemplate.model';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

// Create the StyledFancyGridTemplate component
type TStyledFancyGridTemplate = IStyledPrefixAndPicker<
  TFancyGridTemplate,
  'gapColumn' | 'gapRow' | 'gridAreas' | 'width' | 'height'
>;
export const StyledFancyGridTemplate = styled.div<TStyledFancyGridTemplate & { theme: TTheme }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  row-gap: ${({ $gapRow = 'sm', theme }) => theme.spacing[$gapRow]};
  column-gap: ${({ $gapColumn = 'sm', theme }) => theme.spacing[$gapColumn]};
  display: grid;
  ${({ $gridAreas, theme }) => $gridAreas && generateTemplateAreas($gridAreas, theme)};
`;

const generateTemplateAreas = (gridAreas: string[] | TGridAreasBreakpoints, theme: TTheme) => {
  if (Array.isArray(gridAreas)) {
    return css`
      grid-template: ${gridAreas?.map((area) => `"${area}"`).join(' ')};
    `;
  }
  return css`
    ${Object.keys(gridAreas).map((key) => {
      const value = gridAreas[key as keyof typeof theme.breakpoints];
      const breakpointValue = theme.breakpoints[key as keyof typeof theme.breakpoints];

      return css`
        @media ${breakpointValue} {
          grid-template: ${value?.map((area) => `"${area}"`).join(' ')};
        }
      `;
    })}
  `;
};
