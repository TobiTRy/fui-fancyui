import { styled } from 'styled-components';

import { TSpacingsContainer } from '@/components/atoms/SpacingContainer/TSpacingsContainer.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import arrayToCssValues from '@/design/designFunctions/arrayToCssValues/arrayToCssValues';

export const StyledSpacingsContainer = styled.div<TStyledPrefixAndPicker<TSpacingsContainer>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding)};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin)};
  ${({ $externalStyle }) => $externalStyle};
`;
