import { styled } from 'styled-components';

import { FancyGridTemplateProps } from '@/components/templates/FancyGridTemplate/TFancyGridTemplate.model';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';

// Create the StyledFancyGridTemplate component
type TStyledFancyGridTemplate = IStyledPrefixAndPicker<
  FancyGridTemplateProps,
  'gapColumn' | 'gapRow' | 'gridAreas' | 'width' | 'height'
>;
export const StyledFancyGridTemplate = styled.div<TStyledFancyGridTemplate>`
  display: grid;
  grid-template: ${({ $gridAreas }) => $gridAreas.map((row) => `"${row}"`).join(' ')};
`;
