import { styled } from 'styled-components';

import { TFancyGridTemplate } from '@/components/templates/FancyGridTemplate/TFancyGridTemplate.model';
import { generateTemplateAreas } from '@/components/templates/FancyGridTemplate/utils/generateTemplateAreas';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

import { generateBreakPointAreas } from './utils/generateTemplateAreas';

// Create the StyledFancyGridTemplate component
type TStyledFancyGridTemplate = TStyledPrefixAndPicker<
  TFancyGridTemplate,
  'gapColumn' | 'gapRow' | 'gridAreas' | 'gridAreasBreakPoints' | 'width' | 'height'
>;
export const StyledFancyGridTemplate = styled.div<TStyledFancyGridTemplate & { theme: TTheme }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  row-gap: ${({ $gapRow = 'sm', theme }) => theme.spacing[$gapRow]};
  column-gap: ${({ $gapColumn = 'sm', theme }) => theme.spacing[$gapColumn]};
  display: grid;
  ${({ $gridAreas }) => generateTemplateAreas({ $gridAreas })};
  ${({ $gridAreasBreakPoints, theme }) => generateBreakPointAreas({ $gridAreasBreakPoints, theme })};
`;
