import { styled } from 'styled-components';

import { TFancyGridTemplate } from '@/components/templates/FancyGridTemplate/TFancyGridTemplate.model';
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
  grid-template: ${({ $gridAreas }) => $gridAreas.map((row) => `"${row}"`).join(' ')};
`;
