import { styled } from 'styled-components';

import { TSpacingsContainer } from '@/components/atoms/FancySpacingBox/TFancySpacingBox.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import arrayToCssValues from '@/design/designFunctions/arrayToCssValues/arrayToCssValues';

export const StyledSpacingsBox = styled.div<TStyledPrefixAndPicker<TSpacingsContainer>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding, 'spacing')};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin, 'spacing')};
  ${({ $externalStyle }) => $externalStyle};
`;
